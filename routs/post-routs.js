const express = require('express');
const { getPost, delitePost, getEditPost, putEditPost, getPosts, getAddPosts, addPosts } = require('../controllers/post-controller');
const router = express.Router();



router.get('/posts/:id', getPost);

router.delete('/posts/:id', delitePost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', putEditPost);

router.get('/posts', getPosts);
    
    // const posts = [
    //     {
    //         id: '1',
    //         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim fuga rerum aliquam possimus molestias dicta. Autem dolorum ipsa, minus architecto quidem, eveniet ab inventore quasi alias dignissimos ducimus quibusdam itaque?',
    //         title: 'Post title',
    //         data: '01.01.2022',
    //         author: 'Alex',
    //     }
    // ];
    // res.render(createPath('posts'), {title, posts});

router.post('/add-post', getAddPosts);
     
    // const post = {
    //     id: new Date(),
    //     data: (new Date().toLocaleDateString()),
    //     title,
    //     author,
    //     text,
    // }
    // res.render(createPath('post'), {post,title});

router.get('/add-post', addPosts);

module.exports = router;