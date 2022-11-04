import { Router } from "express";
import { addPost, deletePost, getPostById, getPosts, updatePost } from "../controllers/posts.controller.js";

const router = Router()


router.get('/posts', getPosts)

router.post('/posts', addPost)

router.put('/posts', updatePost)

router.delete('/posts', deletePost)

router.get('/posts/:id', getPostById)

export default router;