import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const Listing = ({ places }) =>
  places &&
  places.map(p => (
    <Marker
      key={p.id}
      name={p.name}
      position={{
        lat: p.geometry.location.lat(),
        lng: p.geometry.location.lng()
      }}
    />
  ));

class PottyMap extends React.Component {
  constructor(props) {
    super(props);

    this.state.position = null;
  }

  state = {
    places: []
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: "500",
      type: ["restroom"]
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: results });
      }
    });
  };

  /*searchAddress = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: "500",
      type: ["food"]
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: results });
      }
    });
  };*/

  render() {
    return (
      <div
        style={{
          width: "75%",
          marginLeft: 0,
          height: "350px"
        }}
      >
          <h3>{this.props.userSearch}</h3>
        <Map
          google={this.props.google}
          zoom={8}
          //initialCenter={{ lat: 47.444, lng: -122.176 }}
          //center={searchAddress(this.props.userSearch)}
          onReady={this.onMapReady}
          containerStyle={{
            height: "100%",
            position: "relative",
            width: "100%"
          }}
        >
          {this.state.places &&
            this.state.places.map(p => (
              <Marker
                key={p.id}
                name={p.name}
                position={{
                  lat: p.geometry.location.lat(),
                  lng: p.geometry.location.lng()
                }}
              />
            ))}
        </Map>
      </div>
    );
  }
}

