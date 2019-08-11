const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: false }))
.use(express.json());

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


app.post('/post/create',(req,res) => {

    postController.create(req.body,(err,post_id) => {

        if(!err){
            res.json({
                'message': 'success',
                'post id': post_id
                });
        }else{
            res.json({
                'message': 'error',
                'error' : err
            });
        }
    });
    

});

app.put('/post/update/:id',(req,res) => {

    postController.update(req.params.id,req.body,(err,post_id) => {
        if(!err){
            res.json({
                'message': 'success',
                'post id': post_id
                });
        }else{
            res.json({
                'message': 'error',
                'error' : err
            });
        }
    });
    

});

app.get('/post/delete/:id',(req,res) => {
    
    postController.delete(req.params.id,(err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });

});

app.listen(port,console.log(`Example app listening on port ${port}!`));