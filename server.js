import express from "express";
import cors from "cors";
import feedRoutes from "./routes/feedRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.use('/feed', feedRoutes)
app.use('/auth', authRoutes)

connectDB()

app.listen(port, () => {
    console.log("Server online na porta: " + port)
})