import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import EventsPage from './components/pages/EventsPage';
import Login from './components/pages/Login';
import Search from './components/pages/Search';import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div class="container">
        <a class="navbar-brand" href="/">Home</a>
        </div>
        <div class="container">
        <a class="navbar-brand" href="/login">Login</a>
        </div>
        <div class="container">
        <a class="navbar-brand" href="/events">Events</a>
        </div>
        <div class="container">
        <a class="navbar-brand" href="/search">Search</a>
        </div>
        <div class="container">
        <a class="navbar-brand" href="/signup">Sign Up</a>
        </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="/events" component={EventsPage}>
        </Route>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/search" component={Search}>
        </Route>
        <Route path="/signup" component={SignUp}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;