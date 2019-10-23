import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

function Schools() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Schools</h1>
        <br></br>
        <div class="card-deck">
          <div class="card">
            <img
              src="./images/u-u_campus.jpg"
              class="card-img-top"
              alt="Fashion"
            />
            <div class="card-body">
              <h5 class="card-title">U of U (Main Campus)</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location:SLC</li>
              <li class="list-group-item">Number of Bathroom: 20</li>
            </ul>
            <div class="card-body">
              <a href="dummybathroom.html" class="card-link">
                Visit
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src="./images/u-u_sandycampus.jpg"
              class="card-img-top"
              alt="South"
            />
            <div class="card-body">
              <h5 class="card-title">U of U (Sandy Campus)</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location:Sandy</li>
              <li class="list-group-item">Number of Bathroom: 5</li>
            </ul>
            <div class="card-body">
              <a href="dummybathroom.html" class="card-link">
                Visit
              </a>
            </div>
          </div>
          <div class="card">
            <img src="./images/byu.jpg" class="card-img-top" alt="city" />
            <div class="card-body">
              <h5 class="card-title">BYU</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Location:Provo</li>
              <li class="list-group-item">Number of Bathroom: 15</li>
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

export default Schools;