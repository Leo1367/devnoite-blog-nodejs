import Post from "../model/postModel.js";

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ msg: "postagens recebidas com sucesso", posts: posts });
    } catch (error) {
        res.status(500).json({ error: true, message: "Erro ao buscar as postagens" });
    }
}

const createPost = async (req, res) => {
    try {
        const { title, content, imageUrl } = req.body;
        const post = new Post({ title, content, imageUrl });

        await post.save();

        res.status(201).json({
            msg: "Postagem criada com sucesso!"
        });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao criar a postagem" });
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const { title, content, imageUrl } = req.body;

        if (!post) {
            return res.status(404).json({ msg: 'Postagem não encontrada' });
        }

        const updateData = { title, content, imageUrl };

        const updatePost = await Post.findByIdAndUpdate(post, updateData, { new: true })

        res.status(200).json({
            msg: "Postagem atualizada com sucesso!", post: updatePost
        });
    } catch (error) {
        res.status(500).json({ error: true, message: "Erro ao atualizar as postagens" });
    }
}

const deletePost = async (req, res) => {
    try {
        const post = req.params.id;
        if (!post) {
            return res.status(404).json({ msg: 'Postagem não encontrada' });
        }

        await Post.findByIdAndDelete(post);

        res.status(200).json({ msg: "Postagem excluída com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: true, message: "Erro ao buscar as postagens" });
    }
}

const feedController = {
    deletePost,
    updatePost,
    createPost,
    getPosts
}

export { feedController } 