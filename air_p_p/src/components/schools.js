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
              <li class="list-group-item">Overall Rating</li>
              <div class="star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" />
                <label for="5-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label for="4-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label for="3-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label for="2-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="1-star" name="rating" value="1" />
                <label for="1-star" class="star">
                  &bigstar;
                </label>
              </div>
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
              <li class="list-group-item">Overall Rating</li>
              <div class="star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" />
                <label for="5-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label for="4-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label for="3-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label for="2-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="1-star" name="rating" value="1" />
                <label for="1-star" class="star">
                  &bigstar;
                </label>
              </div>
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
              <li class="list-group-item">Overall Rating</li>
              <div class="star-rating">
                <input type="radio" id="5-stars" name="rating" value="5" />
                <label for="5-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="4-stars" name="rating" value="4" />
                <label for="4-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="3-stars" name="rating" value="3" />
                <label for="3-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="2-stars" name="rating" value="2" />
                <label for="2-stars" class="star">
                  &bigstar;
                </label>
                <input type="radio" id="1-star" name="rating" value="1" />
                <label for="1-star" class="star">
                  &bigstar;
                </label>
              </div>
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