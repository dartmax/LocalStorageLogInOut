import React, {useCallback, useEffect} from 'react'
import {BrowserRouter as Router, Route, Redirect, BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {connect} from "react-redux";

import LoginPage from "./pages/Login";
import LogoutPage from "./pages/Logout";
import MainPage from "./pages/Main";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";

const PrivateRoute = ({ component: Component, ...rest}) =>  {

  const loggedIn = useSelector((state) => Boolean(state.user));

  if (!loggedIn) {
    console.log("PrivateRoute: not logged in!")
  }
  else {
    console.log("PrivateRoute: logged in")
  }

  return (
    <Route
      {...rest}
      render={props => (
        !loggedIn ? (
          <Redirect to={{ pathname: '/login', state: { from: props.location }
          }}/>
        ) : (
          <Component {...props}/>
        )
      )}/>
  );
};

const App = (props) => {
  const catchAllUnhandledErrors = useCallback((e) => {
    alert("promiseRejectionEvent")
  }, [])

  useEffect(() => {
    props.initializeApp();
  }, [props])

  useEffect(() => {
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
  }, [catchAllUnhandledErrors])

  return(
    <Router>
    <Route name="login" path="/login" component={LoginPage} props={props}/>
    <PrivateRoute name="logout" path="/logout" component={LogoutPage} props={props} />
    <PrivateRoute name="main" path="/main" component={MainPage} props={props} />
    <Redirect from="/" to="/login" props={props} />
  </Router>
  )
};

let AppContainer = compose(
  withRouter,
  connect(null, {initializeApp}))(App);


const ContactListApp = () => {
  return (
    <BrowserRouter>
        <AppContainer/>
    </BrowserRouter>
  )
}

export default ContactListApp;