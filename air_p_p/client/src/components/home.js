import React from "react";
import "./home.css";
import PottyMap from "./pottymap"
import PottySearch from "./pottysearch"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: "10011 Centennial Parkway"
    };
  }

  render() {
    return (
      <div>
        <br></br>

        <div className="jumbotron">
          <div className="container">
            <h3 className="display-4 airbnb"> AirPnP </h3>
            <br></br>
            <h3 className="display-4 air-descrip">Locate a restroom near you.</h3>
            <br></br>
            <PottyMap userSearch={this.state.userSearch} />
          </div>
        </div>

        <div className="jumbotron">
          <div className="container slider">
            <div className="row">
              <div className="col">
                <a href="malls.html" />
                <div className="malls">
                  <img className="indexImg" src="./images/mall.jpg" />
                  <p> Malls </p>
                </div>
              </div>
              <div className="col">
                <a href="schools.html" />
                <div className="schools">
                  <img className="indexImg" src="./images/school.jpg" />
                  <p> Schools</p>
                </div>
              </div>
              <div className="col">
                <a href="top10.html" />
                <div className="Top">
                  <img className="indexImg" src="./images/top10-900x400.jpg" />
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
}

export default Home;