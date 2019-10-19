import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

function Review() {
<<<<<<< HEAD
    return (
<div class="card">
  <h5 class="card-header">Submit a Review</h5>
  <div class="card-body" />
  <form>
    <div class="form-group">
      User
      <input
        type="user"
        class="form-control"
        id="userInfo"
        placeholder="John Doe"
      />
    </div>
=======
  return (
    <div class="card">
      <h5 class="card-header">Submit a Review</h5>
      <div class="card-body" />
      <form>
        <div class="form-group">
          User
          <input
            type="user"
            class="form-control"
            id="userInfo"
            placeholder="Danny Devito"
          />
        </div>
>>>>>>> 498418bb2099802c67157d2a46d18f3e9c7ef2cf

        <div class="form-group">
          <label for="inputLocation">Location</label>
          <input
            type="text"
            class="form-control"
            id="inputLocation"
            placeholder="Nordstrom 2nd floor"
          />
        </div>

        <div class="form-group">
          <label for="Cleanliness review">Cleanliness Review</label>
          <select class="form-control" id="Cleanliness">
            <option>Poor</option>
            <option>Fair</option>
            <option>Good</option>
            <option>Sqeaky Clean</option>
          </select>
        </div>

        <div>Wait Time</div>
        <div></div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="Wait"
            value="option1"
          />
          <label class="form-check-label" for="No wait">
            No wait
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="Wait"
            value="option2"
          />
          <label class="form-check-label" for="Short wait">
            Short wait
          </label>
        </div>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="Wait"
            value="option3"
          />
          <label class="form-check-label" for="Long wait">
            Long wait
          </label>
        </div>

        <br></br>

        <section class="rating-widget">
          <div class="rating-stars text-center">
            <ul id="stars">
              <li class="star" title="Poor" data-value="1">
                <i class="fa fa-star fa-fw"></i>
              </li>
              <li class="star" title="Fair" data-value="2">
                <i class="fa fa-star fa-fw"></i>
              </li>
              <li class="star" title="Good" data-value="3">
                <i class="fa fa-star fa-fw"></i>
              </li>
              <li class="star" title="Excellent" data-value="4">
                <i class="fa fa-star fa-fw"></i>
              </li>
              <li class="star" title="WOW!!!" data-value="5">
                <i class="fa fa-star fa-fw"></i>
              </li>
            </ul>
          </div>

          <div class="success-box">
            <div class="clearfix"></div>
            <img
              alt="tick image"
              width="32"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            />
            <div class="text-message"></div>
            <div class="clearfix"></div>
          </div>
        </section>

        <div class="form-group">
          <label for="imageUploud">Picture</label>
          <input type="file" class="form-control-file" id="imageUpload" />
        </div>
      </form>
      <a href="#" class="btn btn-primary">
        Submit
      </a>
    </div>
  );
}

export default Review;
