import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import CustomMarker from "./CustomMarker/CusomMarker";

import "./Map.scss";

export default function Map({ company, address }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const position = [latitude, longitude];

  async function geocodeAddress() {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`,
      );
      const data = await response.json();

      if (data.length > 0) {
        const result = data[0];
        setLatitude(parseFloat(result.lat));
        setLongitude(parseFloat(result.lon));
      } else {
        console.log(`Адрес "${address}" не найден.`);
      }
    } catch (err) {
      setError(`Произошла ошибка при выполнении запроса: ${err.message}`);
    }
  }

  useEffect(() => {
    geocodeAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  if (error) {
    return <div>{error}</div>;
  }

  if (position === null || longitude === null) {
    return null; // Пока координаты не получены, компонент не будет рендериться
  }

  return (
    <div className="map">
      <MapContainer
        center={position}
        zoom={15}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CustomMarker position={position} text={company} />
      </MapContainer>
    </div>
  );
}
