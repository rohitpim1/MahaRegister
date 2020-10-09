import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
  const Map=()=>{
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
  };
  export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapContainer);