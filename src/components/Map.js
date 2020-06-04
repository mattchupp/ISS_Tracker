import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Circle } from 'google-maps-react';
// require('dotenv').config({ path: '../../.env' })

const mapStyles = {
  width: '500px',
  height: '500px',
  position: 'relative'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={3}
        style={mapStyles}
        center={{
         lat: this.props.lat,
         lng: this.props.long
        }}
      >
        <Circle
        radius={1200}
        center={{
          lat: this.props.lat,
          lng: this.props.long
         }}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />

      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(MapContainer);