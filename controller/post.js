const post = {}
const mongoose = require('mongoose');
const postModel = require('../model/post.js');
mongoose.connect('mongodb://basic-blog:basic-blog123@ds161397.mlab.com:61397/basic-blog', {useNewUrlParser: true});


post.create = (request,callback) => {    

    const newPost = new postModel({
         title: request.title,
         content : request.content
    });
        
    return newPost.save().then(() => { 
        return callback();
    });
}

post.all = (callback) => {
    postModel.find({}, function(err, posts) {
        return callback(posts);
    });
}

post.get = (id,callback) => {
    postModel.findOne({_id: id}, function(err, posts) {
        return callback(posts);
    });
}


post.update = (id,request,callback) => {
    postModel.findByIdAndUpdate(id, request,(err, post) => {
        return callback(err,post.id);
    });
}

post.delete = (id,callback) => {
    postModel.findByIdAndDelete(id,(err) => {
        return callback(err);
    });
}




module.exports = post;