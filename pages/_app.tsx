import "../styles/globals.css";
import type { AppProps } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../graphql/apollo";

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}
