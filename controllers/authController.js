import bcrypt from 'bcrypt';
import User from "../model/userModel.js";

const validarSenha = (senha) => senha.length >= 8;

const hashSenha = async (senha) => await bcrypt.hash(senha, 12);

const signUp = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        if (!validarSenha(password)) {
            return res.status(400).json({ msg: 'A senha deve ter pelo menos 8 caracteres' });
        }

        const emailExisting = await User.findOne({ email })
        if (emailExisting) {
            return res.status(400).json({ msg: 'E-mail já cadastrado' })
        }

        const hashedPassword = await hashSenha(password);
        const user = new User({ email, name, password: hashedPassword })
        await user.save()
        res.status(200).json({ msg: 'Usuário cadastrado com sucesso', user: user })
    } catch (error) {
        res.status(400).json({ msg: error });
        console.log(error)
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: 'Email não encontrado' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ msg: 'Senha Inválida' })
        }

        res.status(200).json({ msg: 'sucesso no login', user: user })
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

const auth = {
    signIn, 
    signUp
}

export default auth