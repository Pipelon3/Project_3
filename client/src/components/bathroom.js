import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

class Bathroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      numberOfBathrooms: "",
      locations: []
    };
  }

  // componentDidMount() {
  //   fetch("/api/locations", {
  //     method: "GET", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         return console.error("something went wrong in fetch locations api");
  //       }
  //     })
  //     .then(data => {
  //       console.log("database", data);
  //       for(let i = 0; i < data.length; i++) {
  //         let datarow = data[i]
  //         if (datarow.bathroom_location === input) {
  //           this.setState({
  //             locations: data
  //           });
  //         }
  //       }
  //     });
  // }
  // handleVisit = (input)=>{
  //  console.log(input) 
  // }

  render() {
    console.log(this.state);
    console.log(this.props.match.params.location_name);
    return (
      <div class="card">
        <h1>bathroom</h1>
        {/* implement cards dynamically
        {this.state.locations.map((location, i) => {
          console.log(location);
          return (
            <div class="card-body" key={i}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{location.location}</li>
                <li class="list-group-item">
                  clean_status: {location.clean_status}
                </li>
                <li class="list-group-item">
                  description: {location.description}
                </li>
                <li class="list-group-item">floor: {location.floor}</li>
                <li class="list-group-item">
                  location_type: {location.location_type}
                </li>
              </ul>
              <button onClick={this.handleVisit(location.location)}>Visit</button>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Bathroom;
