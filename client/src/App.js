import "./App.css";
import QueryComponent from "./components/QueryComponent";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  // from official documentation

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });

  return (
    <>
      <ApolloProvider client={client}>
        <QueryComponent />
      </ApolloProvider>
    </>
  );
}

export default App;
