import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    }
})

export default mongoose.model("Post", postSchema)