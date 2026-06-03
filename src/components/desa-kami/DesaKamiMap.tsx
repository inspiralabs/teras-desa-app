"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DESA_GPS } from "@/lib/mock-data/desa-kami";

const desaBounds: [number, number][] = [
  [-6.318, 106.962],
  [-6.318, 106.976],
  [-6.328, 106.976],
  [-6.328, 106.962],
];

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export function DesaKamiMap() {
  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-mid-gray/30 [&_.leaflet-container]:z-0 [&_.leaflet-container]:h-[min(280px,50vh)] md:[&_.leaflet-container]:h-[400px]">
      <MapContainer
        center={[DESA_GPS.lat, DESA_GPS.lng]}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={desaBounds}
          pathOptions={{ color: "#2F6F4E", fillColor: "#55816A", fillOpacity: 0.25 }}
        />
        <Marker position={[DESA_GPS.lat, DESA_GPS.lng]}>
          <Popup>
            <strong>Peta Desa Bojongkulur</strong>
            <br />
            Kantor Desa
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
