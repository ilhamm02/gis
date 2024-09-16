import { useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { icon } from "leaflet";

import { GeoJSON } from "../constants";

import "leaflet/dist/leaflet.css";

import MarkerIcon from "../assets/images/marker.png";

function LeafletMap() {
  const mapRef = useRef();

  const ICON = icon({
    iconUrl: MarkerIcon,
    iconSize: [20, 32],
  });

  return (
    <MapContainer ref={mapRef} center={GeoJSON[0].position} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {GeoJSON.map((place) => {
        return (
          <Marker key={place.position} icon={ICON} position={place.position}>
            <Popup>{place.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default LeafletMap;
