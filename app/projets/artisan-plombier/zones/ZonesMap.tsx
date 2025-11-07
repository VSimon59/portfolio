"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const CENTER: LatLngExpression = [50.94, 1.87];

const SECTEURS: { name: string; center: LatLngExpression; radius: number }[] = [
  { name: "Calais",        center: [50.9513, 1.8587], radius: 1200 },
  { name: "Marck",         center: [50.9480, 1.9750], radius: 1000 },
  { name: "Guînes",        center: [50.8660, 1.8740], radius: 1100 },
  { name: "Sangatte",      center: [50.9320, 1.7350], radius: 900  },
  { name: "Coquelles",     center: [50.9320, 1.8110], radius: 800  },
  { name: "Coulogne",      center: [50.9320, 1.8680], radius: 1000 },
  { name: "Grande-Synthe", center: [51.0150, 2.3120], radius: 1200 },
];

export default function ZonesMap() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="h-[420px] w-full rounded-2xl border border-gray-200 shadow-sm bg-gray-50" />;
  }

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <MapContainer center={CENTER} zoom={12.5} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {SECTEURS.map((s) => (
          <Circle
            key={s.name}
            center={s.center}
            radius={s.radius}
            pathOptions={{ color: "#1e3a8a", weight: 1.5, fillColor: "#2563eb", fillOpacity: 0.2 }}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-medium">{s.name}</div>
                <div className="text-gray-600">Zone couverte (~{Math.round(s.radius / 1000)} km)</div>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}
