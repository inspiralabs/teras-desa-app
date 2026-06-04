"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  BOJONGKULUR_BOUNDARY,
  BOJONGKULUR_CENTER,
} from "@/lib/mock-data/bojongkulur-boundary";
import { DESA_POI_MARKERS } from "@/lib/mock-data/bestie-prodeskel";

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

const kantorIcon = L.divIcon({
  className: "",
  html: `<span style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:#2F6F4E;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25);font-size:18px" aria-hidden>🏛</span>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
});

function FitBounds({ bounds }: { bounds: L.LatLngBoundsExpression }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds, { padding: [24, 24], maxZoom: 15 });
  }, [map, bounds]);
  return null;
}

export function DesaKamiMap() {
  const bounds = useMemo(
    () => L.latLngBounds(BOJONGKULUR_BOUNDARY),
    []
  );

  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-xl border border-mid-gray/30 [&_.leaflet-container]:z-0 [&_.leaflet-container]:h-[min(320px,55vh)] md:[&_.leaflet-container]:h-[420px]">
        <MapContainer
          center={[BOJONGKULUR_CENTER.lat, BOJONGKULUR_CENTER.lng]}
          zoom={BOJONGKULUR_CENTER.zoom}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds bounds={bounds} />
          <Polygon
            positions={BOJONGKULUR_BOUNDARY}
            pathOptions={{
              color: "#1a1a1a",
              weight: 2.5,
              fillColor: "#9ca3af",
              fillOpacity: 0.35,
            }}
          />
          {DESA_POI_MARKERS.map((poi) => (
            <Marker
              key={poi.id}
              position={[poi.lat, poi.lng]}
              icon={poi.id === "kantor-desa" ? kantorIcon : defaultIcon}
            >
              <Popup>
                <strong>{poi.nama}</strong>
                <br />
                <span className="text-xs text-dark-gray">{poi.kategori}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
