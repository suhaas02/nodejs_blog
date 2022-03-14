const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog',blogSchema);
//from 16:00 to 19:00 ..in netninja vid watch again

