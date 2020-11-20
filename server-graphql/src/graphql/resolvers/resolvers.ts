import { IResolvers } from "apollo-server";
import { fetchPostsUI, fetchPostUsersUI } from "../../features";

const resolvers: IResolvers = {
  DataMainPost: {
    __resolveType: (obj: { component: string }) => {
      return obj.component;
    },
  },
  Query: {
    list_all_posts: async (ctx, { skip, limit }) => {
      const [fetchPosts, fetchPostUsers] = [
        await fetchPostsUI(skip, limit),
        await fetchPostUsersUI(skip, limit),
      ];
      return [...fetchPostUsers, ...fetchPosts];
    },
  },
};

export default resolvers;
