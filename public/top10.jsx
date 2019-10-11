var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Top 10</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
        {/* NAV Bar */}
        <nav id="navb" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <img src="./assets/images/TP-icon.png" width={30} height={30} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="signIn.html">Sign-In/Sign-Up </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="review.html">Review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="malls.html">Malls</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="schools.html">Schools</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="top10.html">Top 10</a>
              </li>
            </ul>
          </div>
        </nav>
        <br /><br />
        {/* Locations */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Top 10</h1>
            <br /><br />
            <div className="card-deck">
              <div className="card">
                <img src="./assets/images/fashion-place.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title">Fashion Place</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:  Nordstram 3rd floor</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Short wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/south-town.jpg" className="card-img-top" alt="South" />
                <div className="card-body">
                  <h5 className="card-title">South Town</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:  Hot Topic 2nd floor</li>
                  <li className="list-group-item">Clean Status: Squeky Clean</li>
                  <li className="list-group-item">Wait Time:  No wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/u-u_campus.jpg" className="card-img-top" alt="city" />
                <div className="card-body">
                  <h5 className="card-title">U of U (Main Campus)</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:  Library 1st floor</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Long wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/fashion-place.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title">Valley Fair</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location: Food Court</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Long wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/city-creek.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title"> City Creek</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   Main elevators 2nd floor</li>
                  <li className="list-group-item">Clean Status: Squeaky Clean</li>
                  <li className="list-group-item">Wait Time:  No wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
            </div>
            <br /><br />
            <div className="card-deck">
              <div className="card">
                <img src="./assets/images/fashion-place.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title"> Valley Fair</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   Food Court</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Short wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/byu.jpg" className="card-img-top" alt="South" />
                <div className="card-body">
                  <h5 className="card-title">BYU</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   Main Entrance</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Long wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/city-creek.jpg" className="card-img-top" alt="city" />
                <div className="card-body">
                  <h5 className="card-title">City Creek</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   South Entrance</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Short wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/u-u_sandycampus.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title">U of U (Sandy Campus)</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   3rd Floor</li>
                  <li className="list-group-item">Clean Status: Good</li>
                  <li className="list-group-item">Wait Time:  Short wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
              <div className="card">
                <img src="./assets/images/byu.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title"> BYU</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location:   North Entrance</li>
                  <li className="list-group-item">Clean Status: Poor</li>
                  <li className="list-group-item">Wait Time:  Short wait</li>
                  <li className="list-group-item">Rating</li>
                  <div className="star-rating">
                    <input type="radio" id="5-stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="4-stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="3-stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="2-stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="1-star" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    );
  }
});