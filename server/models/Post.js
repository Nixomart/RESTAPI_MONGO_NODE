import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        require: true,
        type: String,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    image: {
        url: String,
        public_id: String,
    }

})

export default model('PostSchema', PostSchema);