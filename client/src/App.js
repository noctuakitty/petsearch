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
import Search from './components/pages/Search';
import SignUp from './components/pages/SignUp';
import './components/styles.css';

function App() {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container">
        <a className="navbar-brand" href="/">Home</a>
        </div>
<<<<<<< HEAD
        
        <div class="container">
        <a class="navbar-brand" href="/login" >Login</a>
=======
        <div className="container">
        <a className="navbar-brand" href="/login">Login</a>
>>>>>>> 45c95aca083d32293a1f9cf532a0be220ada0382
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