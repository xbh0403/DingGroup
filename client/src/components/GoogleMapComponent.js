import React from "react";
import { useMediaQuery, CssBaseline } from "@mui/material";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
console.log(googleMapApiKey);
export const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
  },
  {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
  },
  {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
  },
  {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
  },
  {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
  },
  {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
  },
  {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
  },
  {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
  },
  {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
  },
  {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
  },
  {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
  },
  {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
  },
  {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
  },
  {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
  },
  {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
  },
];

export default function GoogleMapComponent({height, width}){
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
        createTheme({
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
            },
        }),
    [prefersDarkMode],
  );
  console.log(theme.BACKGROUND_COLOR);
  const defaultProps = {
    center: {
      lat: 49.26131619158471,
      lng: -123.24901713312708
    },
    zoom: 15
  };

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ height: height, width: width, margin:'auto'}}>
      <LoadScript googleMapsApiKey={googleMapApiKey}>
        <GoogleMap
          id="map"
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          mapContainerStyle={{ height: height }}
          options={{ styles: prefersDarkMode ? darkStyle : [] }}
        >
        {/*  Marker component */}
        <Marker position={defaultProps.center}/>
        </GoogleMap>
      </LoadScript>
    </div>
    </ThemeProvider>
  );
}
