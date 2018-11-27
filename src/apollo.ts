import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers, typeDefs } from "./clientState";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  typeDefs,
  defaults,
  resolvers
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
});

export default client;
