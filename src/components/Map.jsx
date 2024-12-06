import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]); // Update state with user's location
      },
      (error) => {
        console.error("Error fetching user's location:", error);
        alert("Unable to fetch your location.");
      }
    );
  }, []);

  return (
    <div className="my-10 mx-auto max-w-4xl">
      {userLocation ? (
        <MapContainer
          center={userLocation}
          zoom={14}
          className="w-full h-96 rounded-lg shadow-lg"
        >
          {/* Tile Layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* User Marker */}
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="text-center p-4">Loading your location...</div>
      )}
    </div>
  );
}

export default Map;
