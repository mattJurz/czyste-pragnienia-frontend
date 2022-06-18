import { IncomingMessage, ServerResponse } from 'http';
import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
// import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from 'apollo-upload-client';
import { apiUrl } from '../config';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

// function createIsomorphLink(context: ResolverContext = {}) {
//   if (typeof window === "undefined") {
//     const { SchemaLink } = require("@apollo/client/link/schema");
//     const { schema } = require("./schema");
//     return new SchemaLink({ schema, context });
//   } else {
//     const { HttpLink } = require("@apollo/client");
//     return new HttpLink({
//       uri: "/api/graphql",
//       credentials: "same-origin",
//     });
//   }
// }

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`,
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: apiUrl,
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        // headers,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            // allProducts: paginationField(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  context?: ResolverContext,
) {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
