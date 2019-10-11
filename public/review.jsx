var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Review</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="../public/assets/css/style.css" />
        {/* NAV Bar */}
        <nav id="navb" className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">
            <img src="./assets/images/TP-icon.png" width={30} height={30} alt="" />
          </a>
          <button className="navbar-txoggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
              <li className="nav-item active">
                <a className="nav-link" href="review.html">Review</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="malls.html">Malls</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="schools.html">Schools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="top10.html">Top 10</a>
              </li>
            </ul>
          </div>
        </nav>
        <br /><br />
        <div className="card">
          <h5 className="card-header">Submit a Review</h5>
          <div className="card-body">
            <form>
              {/* User info */}
              <div className="form-group">User
                <input type="user" className="form-control" id="userInfo" placeholder="Danny Devito" />
              </div>
              {/* Location info */}
              <div className="form-group">
                <label htmlFor="inputLocation">Location</label>
                <input type="text" className="form-control" id="inputLocation" placeholder="Nordstrom 2nd floor" />
              </div>
              {/* Cleanliness */}
              <div className="form-group">
                <label htmlFor="Cleanliness review">Cleanliness Review</label>
                <select className="form-control" id="Cleanliness">
                  <option>Poor</option>
                  <option>Fair</option>
                  <option>Good</option>
                  <option>Sqeaky Clean</option>
                </select>
              </div>
              {/* Wait Time */}
              <div>Wait Time
                <div />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="Wait" defaultValue="option1" />
                  <label className="form-check-label" htmlFor="No wait">No wait</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="Wait" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="Short wait">Short wait</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" id="Wait" defaultValue="option3" />
                  <label className="form-check-label" htmlFor="Long wait">Long wait</label>
                </div>
                <br /><br />
                {/* Feedback */}
                <div className="form-group">
                  <label htmlFor="Feedback">Feedback</label>
                  <textarea className="form-control" id="Feedback" rows={3} defaultValue={""} />
                </div>
                {/* Rating */}
                <div>Rating
                  <div />
                  <div className="star-rating">
                    <input type="radio" id="stars" name="rating" defaultValue={5} />
                    <label htmlFor="5-stars" className="star">★</label>
                    <input type="radio" id="stars" name="rating" defaultValue={4} />
                    <label htmlFor="4-stars" className="star">★</label>
                    <input type="radio" id="stars" name="rating" defaultValue={3} />
                    <label htmlFor="3-stars" className="star">★</label>
                    <input type="radio" id="stars" name="rating" defaultValue={2} />
                    <label htmlFor="2-stars" className="star">★</label> 
                    <input type="radio" id="stars" name="rating" defaultValue={1} />
                    <label htmlFor="1-star" className="star">★</label>
                  </div>
                  {/* Uploud an image */}
                  <div className="form-group">
                    <label htmlFor="imageUploud">Picture</label>
                    <input type="file" className="form-control-file" id="imageUpload" />
                  </div>
                  <a href="#" className="btn btn-primary">Submit</a>
                </div>
              </div></form>
          </div></div></div>
    );
  }
});