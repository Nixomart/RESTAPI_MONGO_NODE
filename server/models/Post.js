import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        required: true,
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        url: String,
        public_id: String,
    },
},
{
    timestamps: true,
    versionKey: false,
  })

export default model('PostSchema', PostSchema);