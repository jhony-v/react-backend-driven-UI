import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers/resolvers";
import typeDefs from "./schemas/schemas";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
