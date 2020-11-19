import { IResolvers } from "apollo-server";
import { PostModel } from "../../data/Post";

const resolvers: IResolvers = {
  Query: {
    getPosts: async () => {
      const data = await PostModel.find();
      return data;
    },
  },
};
export default resolvers;
