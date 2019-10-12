import React from 'react';
import './home.css';

function Home() {
  return (
    <div>
      

      <br></br>

      <div class="jumbotron">
        <div class="container">
          <h3 class="display-4 airbnb"> AirPnP </h3>
          <br></br>
          <h3 class="display-4 air-descrip">Locate a restroom near you.</h3>
          <br></br>
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Find the perfect potty"
            />
            <span class="input-group-btn"></span>
            <button class="btn btn-secondary btn-lg src-button" type="submit">
              {" "}
              Search{" "}
            </button>
          </div>
        </div>
      </div>

      <div class="jumbotron">
        <div class="container slider">
          <div class="row">
            <div class="col">
              <a href="malls.html" />
              <div class="malls">
                <img class="indexImg" src="./assets/images/mall.jpg" />
                <p> Malls </p>
              </div>
            </div>
            <div class="col">
              <a href="schools.html" />
              <div class="schools">
                <img class="indexImg" src="./assets/images/school.jpg" />
                <p> Schools</p>
              </div>
            </div>
            <div class="col">
              <a href="top10.html" />
              <div class="Top">
                <img class="indexImg" src="./assets/images/top10.jpg" />
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

export default Home;
