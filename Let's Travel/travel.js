let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/travels').then(() => {
console.log('connected to mongodb database');
}).catch((error) =>{
	console.log('something is wrong')
    })
	
let postSchema = new Schema ({
    id: Number,
    title: String,
    date: Date,
    description: String,
    text: String,
    country: String,
    imgURL: String
});

let Post = mongoose.model('Post',postSchema);

let post1 = new Post({
    id: 1,
    title: 'Eiffel Tower',
    date: new Date(),
    description: 'Some description',
    text: 'Some text',
    country: 'Some country',
    imgURL: '/public/images/img-4.jpg'
});
post1.save();

