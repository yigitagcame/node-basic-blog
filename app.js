const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'))


const postController = require('./controller/post.js');

app.get('/',(req,res) => {
    postController.all((posts) =>{
        res.render('home',{
            posts: posts
        });
    })
});

app.get('/post/:id',(req,res) => {
    postController.get(req.params.id,(post) => {
        res.render('post',{
            post: post
        });
    })
});


app.listen(port,console.log(`Example app listening on port ${port}!`));