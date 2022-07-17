import React from "react";
import GoogleMapReact from 'google-map-react';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';

const AnyReactComponent = () => <div>{<WhereToVoteIcon/>}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 49.26131619158471,
      lng: -123.24901713312708
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '60vh', width: '80%', margin:'auto'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCVYXlukwq1d6CncKTe_nGhhQO4wDzVGfE" }}
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
