const express = require('express');

const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const contactRoutes = require('./routs/contact-routs');
const postRoutes = require('./routs/post-routs');
const createPath = require('./helpers/create-path');


const app = express();
app.set('view engine', 'ejs');

//const db = 'mongodb://localhost:27017/node-blog';
const db = 'mongodb://127.0.0.1:27017/node-blog';
//const db = 'mongodb+srv://Alexey:KERZAKOV@cluster0.n0qxstw.mongodb.net/node-block?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then ((res)=> console.log('connect db'))
    .catch((error)=> console.log(error));
 
app.listen (3000, 'localhost', (error)=>{
    error ? console.log('error') : console.log('server listening port 3000');
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({extended:false}));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res)=> {
    const title = 'Home';
    res.render(createPath('index'), {title});
});

app.use(postRoutes);
app.use(contactRoutes);


app.use((req, res)=> {
    const title = 'ERROR';
    res.status(404);
    res.render(createPath('error'), {title});
});