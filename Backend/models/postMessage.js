import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    message: String,
    author:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    likeCount: { votes: Number, default: 0 }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;