import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Menu from "../Routes/Menu";
import GetAccount from "../Routes/GetAccount";
import Board from "../Routes/Board";
import editor from "../Components/Common/Editor";
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Menu} />
    <Route path="/getaccount" component={GetAccount} />
    <Route path="/editor" component={editor} />
    <Route path="/:code" component={Board} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
