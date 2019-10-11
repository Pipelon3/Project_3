var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Sign-in</title>
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
              <li className="nav-item active">
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
        <div className="signin-wrap">
          <div className="signin-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="signin-form">
              <div className="sign-in-htm">
                <br /><br />
                <div className="group">
                  <label htmlFor="user" className="label">E-mail</label>
                  <input id="email_address" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="password" className="label">Password</label>
                  <input id="password" type="password" className="input" data-type="password" />
                </div>
                <div className="group">
                  <br /><br />
                  <input type="submit" className="button" defaultValue="Sign In" />
                </div>
                <div className="hr" />
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">First Name</label>
                  <input id="first_name" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="user" className="label">Last Name</label>
                  <input id="last_name" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="email_address" className="label">Email Address</label>
                  <input id="email_address" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="password" className="label">Password</label>
                  <input id="password" type="password" className="input" data-type="password" />
                </div>
                <label htmlFor="age">Age</label>
                <select id="age" className="form-control">
                  <option selected hidden>Select age group</option>
                  <option>Child (00-14)</option>
                  <option>Youth (15-24)</option>
                  <option>Adults (25-64 years)</option>
                  <option>Seniors (65 years and over)</option>
                </select>
                <label htmlFor="exampleInputGender">Gender</label>
                <select id="gender" className="form-control">
                  <option selected hidden>Select a Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <br /><br />
                <div className="group">
                  <input type="submit" className="button" defaultValue="Sign Up" />
                </div>
                <div className="hr" />
              </div>
            </div>
          </div>
        </div>
        =======
      </div>
    );
  }
});