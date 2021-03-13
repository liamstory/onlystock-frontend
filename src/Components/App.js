import { ApolloProvider } from "react-apollo-hooks";
import Client from "../Apollo/Client";
import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from "./Router";

function App() {
  return (
    <ApolloProvider client={Client}>
      <GlobalStyles />
      <AppRouter isLoggedIn={!false} />
    </ApolloProvider>
  );
}

export default App;
