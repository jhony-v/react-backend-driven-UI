import { IResolvers } from "apollo-server";
import { PostModel } from "../../data/Post";

const resolvers: IResolvers = {
  Query: {
    list_all_posts: async () => {
      const data = await PostModel.find();
      return data;
    },
  },
};
export default resolvers;
