import mongoose from "mongoose";

const connect = "mongodb://localhost:27017"

const connectDB = async () => {
    try {
        await mongoose.connect(connect)
        console.log("Connected to DB")
    } catch (error) {
        console.error('Erro ao conectar com MongoDB:', error);
    }
}

export { connectDB }