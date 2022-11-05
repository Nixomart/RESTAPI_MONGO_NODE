import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

export const addPost = async (req, res) => {
  try {

    const { title, description } = req.body;
    
    console.log(req.files)
    const newPost = new Post({ title, description });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(post)
    return res.send('recived')
  } catch (error) {}
  res.send("posts update");
};

export const deletePost = async(req, res) => {
    try {
        const postRemoved = await Post.findByIdAndDelete(req.params.id)
        if(!postRemoved) return res.sendStatus(404);
        return res.sendStatus(204)
        
    } catch (error) {
        
    }
};
export const getPostById = async(req, res) => {
try {
    //thows new Error("message")
    const post = await Post.findById(req.params.id)
    if(!post) return res.sendStatus(404)
    return res.json(post)
    
} catch (error) {
    console.log(error.message)
    return res.status(500).json({"message": error.message})
}
};
