import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./home.css";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

class PottyMap extends React.Component {
  render() {
    return (
    <div style={{
            width: "75%",
            marginLeft: 0,
            height: "350px"
          }}>
      <Map
        google={this.props.google}
        zoom={8}
        //initialCenter={{ lat: 47.444, lng: -122.176 }}
        style={{ height: 350, 
            width: '75%', 
            display: 'flex', 
            flexFlow: 'row nowrap', 
            justifyContent: 'center', 
            padding: 0 }}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}/>

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Hi{/*this.state.selectedPlace.name*/}</h1>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

console.log("API KEY: " + process.env.REACT_APP_AirPnP_API_KEY);

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_AirPnP_API_KEY)
  })(PottyMap)
