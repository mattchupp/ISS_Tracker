import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// require('dotenv').config({ path: '../../.env' })

const mapStyles = {
  width: '500px',
  height: '500px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{
         lat: this.props.lat,
         lng: this.props.long
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);