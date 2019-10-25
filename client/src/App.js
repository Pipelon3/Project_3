import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import SignIn from './components/signIn'
import Review from './components/review'
import Malls from './components/malls'
import Bathroom from './components/bathroom'
import Schools from './components/schools'

function App() {
  return (
    <Router>
      <nav id="navb" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img
            src="./assets/images/TP-icon.png"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item" className="nav-link">
              <Link to="/signIn">Sign-In/Sign-Up</Link>
            </li>
            <li className="nav-item" className="nav-link">
              <Link to="/malls">Malls</Link>
            </li>
            <li className="nav-item" className="nav-link">
              <Link to="/schools">Schools</Link>
            </li>
            <li className="nav-item" className="nav-link">
              <Link to="/review">Review</Link>
            </li>
            <li className="nav-item" className="nav-link">
              <Link to="/top10">Top 10</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route exact path="/malls">
            <Malls />
          </Route>

          <Route path="/malls/:location_name"  component={Bathroom} />
          
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/signIn">
          <SignIn />
          </Route>
          <Route path="/Top10">
            <div>
              Top 10
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
