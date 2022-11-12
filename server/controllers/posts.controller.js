import Post from "../models/Post.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

export const addPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image = null;
    //validacion si imagen existe
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newPost = new Post({ title, description, image: image });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const {id} = req.params

    //agrega
    const post = await Post.findById(req.params.id)
    if(req.files){
      console.log("hay archivos")
      await deleteImage(post.image.public_id)
      const result = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
      req.body.image = {
        url: result.secure_url,
        public_id: result.public_id
      }

    }/* else{
      postnuevo = {
        title: req.body.title,
        description: req.body.description,
        image: post.image
      }
      console.log(postnuevo)
    } */
    
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
      }
      )
      console.log("viejo",post)
      console.log("update",updatedPost)
    return res.json(updatedPost);
  } catch (error) {}
  res.send("posts update");
};

export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);

    if (postRemoved.image.public_id) {
      await deleteImage(postRemoved.image.public_id);
    }

    return res.sendStatus(204);
  } catch (error) {}
};
export const getPostById = async (req, res) => {
  try {
    //thows new Error("message")
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
