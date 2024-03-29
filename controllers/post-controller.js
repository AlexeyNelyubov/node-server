const Post = require('../modals/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) =>{
    console.log(error);
    res.render(createPath('error'), {title: 'ERROR'});
}

const getPost = (req, res) => {
    const title = 'Post';
    Post
    .findById(req.params.id)
    .then((post)=> res.render(createPath('post'), {post, title}))
    .catch((error)=> handleError(res,error));
};

const delitePost = (req,res) => {
    Post
    .findByIdAndDelete(req.params.id)
    .then((result)=> { 
        res.sendStatus(200);
    })
    .catch((error)=> handleError(res,error));
}

const getEditPost = (req,res) => {
    const title = 'Edit-Post';
    Post
    .findById(req.params.id)
    .then((post)=> res.render(createPath('edit-post'), {post, title}))
    .catch((error)=> handleError(res,error));
};

const putEditPost = (req,res) => {
    const {title, author, text} = req.body;
    const {id} = req.params;
    Post
    .findByIdAndUpdate(id, {title, author, text})
    .then((result)=> res.redirect(`/posts/${id}`))
    .catch((error)=> handleError(res,error));
}

const getPosts = (req,res) => {
    const title = 'Posts';
    Post
        .find()
        .sort({createdAt: -1})
        .then((posts)=> res.render(createPath('posts'), {posts, title}))
        .catch((error)=> handleError(res,error));
};

const getAddPosts = (req,res) => {
    const {title, author, text} =req.body;
    const post = new Post ({ title, author, text });
        post
        .save()
        .then((result)=> res.redirect('/posts'))
    .catch((error)=> handleError(res,error));
};

const addPosts = (req,res) => {
    const title = 'AddPost';
    res.render(createPath('add-post'), {title});
};



module.exports = {
    getPost,
    delitePost,
    getEditPost,
    putEditPost,
    getPosts,
    getAddPosts,
    addPosts,
}