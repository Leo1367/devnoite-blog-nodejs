import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        validate: {
            validator: function (email) {
                return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: 'É necessário ter o @ no email'
        },
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", userSchema);