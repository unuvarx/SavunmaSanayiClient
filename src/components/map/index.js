// Map.js

import React from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "@/components/map/map.module.scss";

export default function Map({ location }) {
  const { lat, lng, title, title2 } = location;

  const customIcon = new Icon({
    iconUrl: "/images/map.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    className: styles.iconn,
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{
        height: "400px",
        width: "100%",
      }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          {title} <br />
          {title2}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
