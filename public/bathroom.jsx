var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Bathroom</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Bathrooms for ...</h1>
            <br /><br />
            <div className="card-deck">
              <div className="card">
                <img src="./assets/images/fashion-place.jpg" className="card-img-top" alt="Fashion" />
                <div className="card-body">
                  <h5 className="card-title">Fashion Place</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Location: Nordstrom 1st floor</li>
                  <li className="list-group-item">Clean Status: Clean</li>
                  <li className="list-group-item">Wait Time: Short Wait</li>
                  <li className="list-group-item">Rating: 5 Stars</li>
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
                  <li className="list-group-item">Location: Home Goods 1st floor</li>
                  <li className="list-group-item">Clean Status: Poor</li>
                  <li className="list-group-item">Wait Time: Long Wait</li>
                  <li className="list-group-item">Rating: 2 Stars</li>
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
                  <li className="list-group-item">Location: West Elm 2nd floor</li>
                  <li className="list-group-item">Clean Status: Fair</li>
                  <li className="list-group-item">Wait Time: Long Wait</li>
                  <li className="list-group-item">Rating: 3 Stars</li>
                </ul>
                <div className="card-body">
                </div>
                {/*next app version will automatically populate these bathroom cards above based on locations and reviews*/}
                {/*visit on click will direct user to a map to that featured restroom*/}
                <a href="#" className="card-link">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});