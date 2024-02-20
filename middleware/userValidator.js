import { check } from "express-validator";

export const validateEmail = check("email")
    .isEmail()
    .withMessage("Digite um email válido!")
    .custom((value, { req }) => {
        if (value === "juca@email.com") {
            throw new Error("Email já consta no banco de dados!");
        }
        return true;
    });

export const validatePassword = check("password")
    .isLength({ min: 8 })
    .withMessage("A senha precisa ter pelo menos 8 caracteres!");

export const validateName = check("name")
    .isLength({ min: 5 })
    .withMessage("O nome precisa ter pelo menos 5 caracteres!")
    .custom((name) => {
        if (name === "Samuel") {
            throw new Error("Usuário já consta no banco de dados!");
        }
        return true;
    });

export const validateTitle = check("title")
    .isLength({ min: 5 })
    .withMessage("O título precisa ter pelo menos 5 caracteres!");
