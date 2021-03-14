import GlobalStyles from "../Styles/GlobalStyles";
import { gql } from "apollo-boost";
import AppRouter from "./Routes";
import { useQuery } from "react-apollo-hooks";
import { HashRouter as Router } from "react-router-dom";

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
    <>
      <GlobalStyles />
      <Router>
        <AppRouter isLoggedIn={isLoggedIn} />
      </Router>
    </>
  );
}

export default App;
