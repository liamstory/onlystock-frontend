import GlobalStyles from "../Styles/GlobalStyles";
import { gql } from "apollo-boost";
import AppRouter from "./Routes";
import { useQuery } from "react-apollo-hooks";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <AppRouter isLoggedIn={isLoggedIn} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
