import React, {Component}from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import ReactDOM from 'react-dom';

function Review () {
class MyForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />
  
          <label htmlFor="inputlocation">Location</label>
          <input id="inputlocation" name="inputlocation" type="text" />
  
          <label for="Cleanliness review">Cleanliness Review</label>
          <select class="form-control" id="Cleanliness">
            <option>Poor</option>
            <option>Fair</option>
            <option>Good</option>
            <option>Sqeaky Clean</option>
          </select>

            class="form-check-input"
            type="radio"
            id="Wait"
            value="option1"
          />
          <label class="form-check-label" for="No wait">
            No wait
          </label>
          <input
            class="form-check-input"
            type="radio"
            id="Wait"
            value="option2"
          />
          <label class="form-check-label" for="Short wait">
            Short wait
          </label>
          <input
            class="form-check-input"
            type="radio"
            id="Wait"
            value="option3"
          />
          <label class="form-check-label" for="Long wait">
            Long wait
          </label>
          <label for="imageUploud">Picture</label>
          <input type="file" class="form-control-file" id="imageUpload" />
          <button>Submit</button>
        </form>
      );
    }
  }
}

export default Review;
