import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import Spinner from "UI-KIT/Spinner/Spinner";
import CustomMarker from "./CustomMarker/CusomMarker";

import "./Map.scss";

export default function Map({ company, address }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const position = [latitude, longitude];
  const [isLoading, setIsLoading] = useState(true);

  async function geocodeAddress() {
    setIsLoading(true);
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
        // eslint-disable-next-line no-console
        console.error(`Адрес "${address}" не найден.`);
      }
    } catch (err) {
      setError(`Произошла ошибка при выполнении запроса: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    geocodeAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="map">
      {isLoading ? (
        <div className="map__spinner">
          <Spinner />
        </div>
      ) : (
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
      )}
    </div>
  );
}
