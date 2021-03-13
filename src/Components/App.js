import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRouter isLoggedIn={!false} />
    </>
  );
}

export default App;
