const Post = require("../models/post")

const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post ({...post, creator: req.userId, createdAt: new Date().toISOString()})
   try {
    await newPost.save();

    res.status(201).json(newPost)
   } catch (error) {
    res.status(404).json({message: error.message})
   }
}

const getAllposts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200)
    } catch (error) {
        
    }
}
modules.exports = {
    create
}