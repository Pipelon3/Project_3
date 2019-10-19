var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Home</title>
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
              <li className="nav-item active">
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
              <li className="nav-item">
                <a className="nav-link" href="top10.html">Top 10</a>
              </li>
            </ul>
          </div>
        </nav>
        <br /><br />
        {/* Search function */}
        <div className="jumbotron">
          <div className="container">
            <h3 className="display-4 airbnb"> AirPnP </h3>
            <br /><br />
            <h3 className="display-4 air-descrip">Locate a restroom near you.</h3>
            <br /><br />
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Find the perfect potty" />
              <span className="input-group-btn">
                <button className="btn btn-secondary btn-lg src-button" type="submit"> Search </button>
              </span></div>
          </div>
        </div>
        {/* Bathroom lists */}
        <div className="jumbotron">  
          <div className="container slider">
            <div className="row">
              <div className="col">
                <a href="malls.html">
                  <div className="malls">
                    <img className="indexImg" src="./assets/images/mall.jpg" />
                    <p> Malls </p>
                  </div>
                </a></div><a href="malls.html">
              </a><div className="col"><a href="malls.html">
                </a><a href="schools.html">
                  <div className="schools">
                    <img className="indexImg" src="./assets/images/school.jpg" />
                    <p> Schools </p>
                  </div>
                </a></div><a href="schools.html">
              </a><div className="col"><a href="schools.html">
                </a><a href="top10.html">
                  <div className="Top">
                    <img className="indexImg" src="./assets/images/top10.jpg" />
                    <p> Top 10 </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
});