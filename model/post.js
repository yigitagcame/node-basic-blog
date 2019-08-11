const mongoose = require('mongoose');
const post = mongoose.model('Posts', {
     title: String,
     content: String 
    });

module.exports = post;

