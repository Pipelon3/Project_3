import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";

class PottySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSearch(this.state.value)
  }

  render() {
    return (
      <div class="input-group">
        {/*<form onSubmit={this.handleSubmit}>*/}
        <input value={this.state.value} onChange={this.handleChange}
          class="form-control"
          type="text"
          placeholder="Find the perfect potty"
        />
        {/*</form>*/}
        <span class="input-group-btn"></span>
        <img class="toilet-button" src="images/toilet-paper.png" onClick={() => this.props.onSearch(this.state.value)}/>
      </div>
    );
  }
}

export default PottySearch;
