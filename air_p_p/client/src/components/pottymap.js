/* eslint-disable no-undef */
import React from "react";
import "./home.css";
import {
  withScriptjs,
  withGoogleMap,
  Marker,
  GoogleMap
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
const _ = require("lodash");

const {
  SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");

console.log(process.env.REACT_APP_AirPnP_API_KEY);

const PottyMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      process.env.REACT_APP_AirPnP_API_KEY +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: "400px" }} />,
    mapElement: <div style={{ height: "100%" }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};
      this.setState({
        bounds: null,
        center: {
          lat: 41.9,
          lng: -87.624
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );

          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
          // refs.map.fitBounds(bounds);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.5693337, lng: -111.8965424 }}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Find the perfect potty"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `600px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `16px`,
          outline: `none`,
          textOverflow: `ellipses`,
          background: `white url(images/toilet-paper.png) no-repeat`,
          backgroundPosition: `right`,
          backgroundSize: `contain`
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
  </GoogleMap>
));

export default PottyMap;
