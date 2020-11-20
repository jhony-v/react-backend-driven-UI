import mongoose from "mongoose";
import { PostModel } from "./models/Post";
import posts from "../mocks/posts";

const pathMongoDB = "mongodb://localhost:27017/social-posts";
const mongoDB = mongoose.connect(pathMongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.once("open",() => {
  PostModel.insertMany(posts);
})

export default mongoDB;
