const Post = require("../models/post")
//create post
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
//get all posts
const getAllposts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//update Post
const updatePost = async (req,res) => {
    const postId = req.params.id;
    const userId = req.user.id; //from jwt middleware
    const {tittle, content } = req.body;

    try {
        //find the post find
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({message: 'post not found'});
        }
        //check if the user owns the post
        if (post.author.toString() !==userId) {
            return res.status(403).json({message: 'unauthorized to update this post'});
        }

        //update the post
        const updatePost = await Post.findByIdAndUpdate(id.update, {new: true});

    } catch (error) {
        console.error('Error updating post:',error);
        return res.status(500).json({message: 'sever error'});
    }
}

//delete posts
exports.deletePost = async(req,res) => {
    try {
        const postId = req.params.id;
        const userId = req.user.id;

        const post = await Post.findById(postId);
        if (!post) return res.status(404).json ({message: 'Post not found'});

        //authorization check - only post owner can delete

        if (post.author.toString() !== userId) {
            return res.status(403).json({message: 'You can only delete your own posts'});
        }
        await Post.findByIdAndDelete((postId));
        res.status(200).json({message:'Post deleted successfully'})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = {
    createPost,
    getAllposts,
    updatePost
}
