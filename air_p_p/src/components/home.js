import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import SignIn from './signIn'
import Review from './review'
import Malls from './malls'
import Schools from './schools'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signIn">Sign-In/Sign-Up</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/malls">Malls</Link>
            </li>
            <li>
              <Link to="/schools">Schools</Link>
            </li>
            <li>
              <Link to="/top10">Top 10</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signIn">
            <SignInRender />
          </Route>
          <Route path="/review">
            <ReviewRender />
          </Route>
          <Route path="/malls">
            <MallsRender />
          </Route>
          <Route path="/schools">
            <Schools />
          </Route>
          <Route path="/Top10">
            <Top10 />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function SignInRender() {
  return <SignIn />;
}

function ReviewRender() {
  return <Review />;
}

function MallsRender() {
  return <Malls />;
}

function SchoolsRender() {
  return <Schools />;
}

function Top10() {
  return <h2>Top 10</h2>;
}

function HomePage() {
  return (
    <div>
      <br></br>

      <div class="jumbotron">
        <div class="container">
          <h3 class="display-4 airbnb"> AirPnP </h3>
          <br></br>
          <h3 class="display-4 air-descrip">Locate a restroom near you.</h3>
          <br></br>
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Find the perfect potty"
            />
            <span class="input-group-btn"></span>
            <img class="toilet-button" src="images/toilet-paper.png" /><button type="submit">
              
            </button>
          </div>
        </div>
      </div>

      <div class="jumbotron">
        <div class="container slider">
          <div class="row">
            <div class="col">
              <a href="malls.html" />
              <div class="malls">
                <img class="indexImg" src="./images/mall.jpg" />
                <p> Malls </p>
              </div>
            </div>
            <div class="col">
              <a href="schools.html" />
              <div class="schools">
                <img class="indexImg" src="./images/school.jpg" />
                <p> Schools</p>
              </div>
            </div>
            <div class="col">
              <a href="top10.html" />
              <div class="Top">
                <img class="indexImg" src="./images/top10-900x400.jpg" />
                <p> Top 10 </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
