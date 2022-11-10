import { Router } from "express";
import { addPost, deletePost, getPostById, getPosts, updatePost } from "../controllers/posts.controller.js";

const router = Router()


router.get('/posts', getPosts)

router.post('/addPost', addPost)

router.put('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)

router.get('/posts/:id', getPostById)

export default router;