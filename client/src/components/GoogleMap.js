import React from "react";
import GoogleMapReact from 'google-map-react';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
// import { googleMapApiKey } from "../api_keys";

const key1 = "AIzaSyCVYXlukwq1d6CncKTe";
const key2 = "_nGhhQO4wDzVGfE";
const googleMapApiKey = key1 + key2;

const AnyReactComponent = () => <div>{<WhereToVoteIcon fontSize={"large"}/>}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default function GoogleMap({height, width}){
  const defaultProps = {
    center: {
      lat: 49.26131619158471,
      lng: -123.24901713312708
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: height, width: width, margin:'auto'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={49.26131619158471}
          lng={-123.24901713312708}
        />
      </GoogleMapReact>
    </div>
  );
}
