import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './components/pages/Home';
import EventsPage from './components/pages/EventsPage';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import SignUp from './components/pages/SignUp';
import PrivateRoute from "./PrivateRoute"
import { AuthContext } from "./context/auth"
import './components/styles.css';


function App(props) {
  return (
    <AuthContext.Provider value= {false}>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container">
        <a className="navbar-brand" href="/">Home</a>
        </div>
        <div className="container">
        <a className="navbar-brand" href="/login">Login</a>
        </div>
        <div className="container">
        <a className="navbar-brand" href="/events">Events</a>
        </div>
        <div className="container">
        <a className="navbar-brand" href="/search">Search</a>
        </div>
        <div className="container">
        <a className="navbar-brand" href="/signup">Sign Up</a>
        </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home}>
          <PrivateRoute path = "/" component = {Home} />
        </Route>
        <Route path="/events" component={Events}>
        <PrivateRoute path = "/events" component = {Events} />
        </Route>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/search" component={Search}>
        <PrivateRoute path = "/search" component = {Search} />
        </Route>
        <Route path="/signup" component={SignUp}>
        </Route>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;