import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import GetAccount from "../Routes/GetAccount";
import Home from "../Routes/Home";
import Post from "../Components/Post";
import Board from "../Components/Board";
import Article from "../Components/Article";
import Policy from "../Routes/Policy";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/post/:code" component={Post} />
    <Route path="/stock/:code" component={Board} />
    <Route path="/article/:code/:id" component={Article} />
    <Route path="/getaccount" component={GetAccount} />
    <Route path="/" component={Policy} />
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
