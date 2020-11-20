import { Document, model, Schema } from "mongoose";

export interface UserType {
  avatar?: string;
  username?: string;
}

export interface ReactionType {
  type?: string;
  text?: string;
  me?: boolean;
}

export interface PostType {
  text?: string;
  image?: string;
  createdAt?: string;
  reactions?: ReactionType[];
  user?: UserType;
}

export interface PostTypeDocument extends PostType, Document {}

export const PostSchema = new Schema<PostTypeDocument>({
  user: {
    avatar: String,
    username: String,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reactions: [
    new Schema({
      type: {
        type: String,
      },
      text: {
        type: String,
      },
      me: {
        type: Boolean,
        default: false,
      },
    },{
      _id:false
    }),
  ],
});
export const PostModel = model<PostTypeDocument>("Post", PostSchema);
