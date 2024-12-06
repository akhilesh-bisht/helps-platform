import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.6139, // Default to Delhi
  lng: 77.209,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  if (!isLoaded) return <div className="text-center p-4">Loading Map...</div>;

  return (
    <div className="my-10">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
