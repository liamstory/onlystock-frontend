import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import GetAccount from "../Routes/GetAccount";
import Home from "../Routes/Home";
import PostList from "../Components/PostList";
import Board from "../Components/Board";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/getaccount" component={GetAccount} />
    <Route path="/post/:code" component={PostList} />
    <Route path="/stock/:code" component={Board} />
    <Redirect from="*" to="/home" />
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
