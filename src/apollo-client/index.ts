import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "Bearer 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",
  },
  cache: new InMemoryCache(),
});
