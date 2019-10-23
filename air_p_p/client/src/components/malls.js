import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

class Malls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      numberOfBathrooms: "",
      locations: [],
      view: "mall",
      selectedLocation: null
    };
  }

  componentDidMount() {
    fetch("/api/locations", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return console.error("something went wrong in fetch locations api");
        }
      })
      .then(data => {
        console.log("database", data);
        for (let i = 0; i < data.length; i++) {
          let datarow = data[i];
          if (datarow.location_type === "mall") {
            let locationsClone = this.state.locations;
            locationsClone.push(datarow);
            this.setState({
              locations: locationsClone
            });
          }
        }
      });
  }

  handleVisit(input) {
    
  }

  render() {
    return (
      <React.Fragment>
        <div class="card">
          {/* implement cards dynamically */}
          {this.state.locations.map((location, i) => {
            console.log(location);
            return (
              <div class="card-body" key={i}>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{location.building_name}</li>
                  <li class="list-group-item">Location: {location.location}</li>
                  <li class="list-group-item">
                    Bathrooms: {location.number_of_bathrooms}
                  </li>
                  <li class="list-group-item">
                    Overall Rating: {location.overall_rating}
                  </li>
                </ul>
                <Link to={`/malls/${location.building_name}`}>
                  Visit
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Malls;
