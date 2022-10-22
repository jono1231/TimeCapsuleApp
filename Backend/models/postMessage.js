import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title:  String,
    message: String,
    creator:   String,
    tags: [String],
    likeCount: { 
        votes: Number, 
        default: 0 
    },    
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;