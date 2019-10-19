import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

function Review() {
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
// class App extends React.Component {
//   constructor() {
//     super();
 
//     this.state = {
//       rating: 1
//     };
//   }
 
//   onStarClick(nextValue, prevValue, name) {
//     this.setState({rating: nextValue});
//   }
 
//   render() {
//     const { rating } = this.state;
    
//     return (                
//       <div>
//         <h2>Rating from state: {rating}</h2>
//         <StarRatingComponent 
//           name="rate1" 
//           starCount={5}
//           value={rating}
//           onStarClick={this.onStarClick.bind(this)}
//         />
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <App />, 
//   document.getElementById('app')
// );

export default Review;
