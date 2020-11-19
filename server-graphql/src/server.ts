import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers/resolvers";
import typeDefs from "./graphql/schemas/schemas";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
