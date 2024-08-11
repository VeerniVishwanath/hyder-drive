import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function LocationTile({ locationName }) {
  const [position, setPosition] = useState();
  useEffect(() => {
    const getGeoLocation = async () => {
      const response = await axios.get("https://nominatim.openstreetmap.org", {
        params: {
          q: locationName,
          format: "json",
        },
      });
      const position = response.data;
      setPosition([position[0].lat, position[0].lon]);
    };
    getGeoLocation();
  }, [locationName]);

  if (position == null) {
    return (
      <div className="flex justify-center items-center w-full h-full text-gray-800">
        Loading...
      </div>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={17}
      scrollWheelZoom={true}
      className="w-full h-full p-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
    </MapContainer>
  );
}
