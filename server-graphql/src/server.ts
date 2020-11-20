import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers/resolvers";
import schemas from "./graphql/schemas/schemas";

const server = new ApolloServer({
  typeDefs : schemas,
  resolvers,
});

export default server;
