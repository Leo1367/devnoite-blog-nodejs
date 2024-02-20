import { Router } from "express";
import { feedController } from "../controllers/feedController.js";

const router = Router();

router.get('/posts', feedController.getPosts);
router.post('/post', feedController.createPost);
router.put('/:id', feedController.updatePost);
router.delete('/:id', feedController.deletePost);

export default router;