import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

function Malls() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Malls</h1>
        <br></br>
        <div class="card-deck">
          <div class="card">
            <img
              src="./images/fashion-place.jpg"
              class="card-img-top"
              alt="Fashion"
            />
            <div class="card-body">
              <h5 class="card-title">Fashion Place</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location: Murray</li>
              <li class="list-group-item">Number of Bathrooms: 6</li>
            </ul>
            <div class="card-body">
              <a href="dummybathroom.html" class="card-link">
                Visit
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="./images/south-town.jpg"
              class="card-img-top"
              alt="South"
            />
            <div class="card-body">
              <h5 class="card-title">South Town</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location: Sandy</li>
              <li class="list-group-item">Number of Bathrooms: 10</li>
            </ul>
            <div class="card-body">
              <a href="dummybathroom.html" class="card-link">
                Visit
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="./images/city-creek.jpg"
              class="card-img-top"
              alt="city"
            />
            <div class="card-body">
              <h5 class="card-title">City Creek</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location: Salt Lake City</li>
              <li class="list-group-item">Number of Bathrooms: 7</li>
            </ul>
            <div class="card-body">
              <a href="dummybathroom.html" class="card-link">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Malls;
