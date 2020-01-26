let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts.js').Post;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
app.use(express.static('public'));
app.listen(3000,() => console.log('server on port 3000'));
mongoose.connect('mongodb://localhost/travels');

let post1 = new Post({
    id: 1,
    title: 'Eiffel Towersasdasda',
    date: new Date(),
    description: 'Some description',
    text: 'Some text',
    country: 'Some country',
    imgURL: '/public/images/img-4.jpg'
});
post1.save();
