import { PostModel } from "../database/models/Post";

export const fetchPostsUI = async (skip: number, limit: number) => {
  const data = await PostModel.find().skip(skip).limit(limit);
  return data.map((e) => ({
    component: "PostCard",
    data: e,
  }));
};

export const fetchPostUsersUI = async (skip: number, limit: number) => {
  const data = await PostModel.find()
    .select({ user: 1 })
    .skip(skip)
    .limit(limit);
  return data.map((e) => ({
    component: "PostAnnounceCard",
    data: e.user,
  }));
};
