import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './home.css';

export default function App() {
    return (
      <Router>
        <div>
          <nav>
          <Switch>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/malls">
              <Malls />
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
          </nav>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }

  function SignIn() {
    return <h2>Sign-in/Sign-up</h2>;
  }
  
  function Review() {
    return <h2>Review</h2>;
  }
  
  function Malls() {
    return <h2>Malls</h2>;
  }

  function Schools() {
    return <h2>Schools</h2>;
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
            <button class="btn btn-secondary btn-lg src-button" type="submit">
              {" "}
              Search{" "}
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
                <img class="indexImg" src="./assets/images/mall.jpg" />
                <p> Malls </p>
              </div>
            </div>
            <div class="col">
              <a href="schools.html" />
              <div class="schools">
                <img class="indexImg" src="./assets/images/school.jpg" />
                <p> Schools</p>
              </div>
            </div>
            <div class="col">
              <a href="top10.html" />
              <div class="Top">
                <img class="indexImg" src="./assets/images/top10.jpg" />
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