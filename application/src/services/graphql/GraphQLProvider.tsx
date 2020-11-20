import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const uri = "http://localhost:8000/";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const GraphQLProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
