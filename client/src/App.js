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
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import './components/styles.css';


function App(props) {
  return (
    <AuthContext.Provider value={true}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
          </div>
          <div className="container">
            <Link className="navbar-brand" to="/login">Login</Link>
          </div>
          <div className="container">
            <Link className="navbar-brand" to="/events">Events</Link>
          </div>
          <div className="container">
            <Link className="navbar-brand" to="/search">Search</Link>
          </div>
          <div className="container">
            <Link className="navbar-brand" to="/signup">Sign Up</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}>
            <PrivateRoute path="/" component={Home} />
          </Route>
          <Route path="/events" component={EventsPage}>
            <PrivateRoute path="/events" component={EventsPage} />
          </Route>
          <Route path="/login" component={Login}>
          </Route>
          <Route path="/search" component={Search}>
            <PrivateRoute path="/search" component={Search} />
          </Route>
          <Route path="/signup" component={SignUp}>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;