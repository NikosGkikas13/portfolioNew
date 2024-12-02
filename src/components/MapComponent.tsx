import {} from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const style = {
    height: "300px",
    maxWidth: "1024px",
    width: "100%",
    borderRadius: "8px",
  };
  return (
    <MapContainer
      id="map "
      center={[38.174201105319455, 23.921665921549554]}
      zoom={13}
      scrollWheelZoom={true}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.174201105319455, 23.921665921549554]}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
