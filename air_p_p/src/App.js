import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Home from "./components/home";

console.log(process.env.REACT_APP_AirPnP_API_KEY)

function App() {
  return (
    <div className="App">
      <nav id="navb" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html">
          <img
            src="./assets/images/TP-icon.png"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="signIn.html">
                Sign-In/Sign-Up
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="review.html">
                Review
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="malls.html">
                Malls
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="schools.html">
                Schools
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="top10.html">
                Top 10
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
