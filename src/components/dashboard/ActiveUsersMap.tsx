import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type LeafletMapLike = {
  remove: () => void;
  fitBounds: (
    bounds: Array<[number, number]>,
    options?: { padding?: [number, number] },
  ) => void;
  setView: (center: [number, number], zoom: number) => void;
};

type ActiveUserMarker = {
  name: string;
  location: string;
  lat: number;
  lng: number;
  color: string;
};

const markers: ActiveUserMarker[] = [
  {
    name: "Stanley",
    location: "London, UK",
    lat: 51.5074,
    lng: -0.1278,
    color: "#4F46E5",
  },
  {
    name: "Chisom",
    location: "Lagos, Nigeria",
    lat: 6.5244,
    lng: 3.3792,
    color: "#10B981",
  },
  {
    name: "Samuel",
    location: "New York, USA",
    lat: 40.7128,
    lng: -74.006,
    color: "#EF4444",
  },
];

export function ActiveUsersMap({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMapLike | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (mapRef.current) return;

    const map = L.map(container, {
      zoomControl: true,
      attributionControl: true,
    }) as unknown as LeafletMapLike;

    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const bounds: Array<[number, number]> = [];

    for (const marker of markers) {
      const icon = L.divIcon({
        className: "",
        html:
          '<div style="' +
          "width:12px;" +
          "height:12px;" +
          "border-radius:9999px;" +
          "background:" +
          marker.color +
          ";" +
          "border:2px solid white;" +
          "box-shadow:0 2px 6px rgba(0,0,0,0.25);" +
          '"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      L.marker([marker.lat, marker.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${marker.name}</strong><br/>${marker.location}`);

      bounds.push([marker.lat, marker.lng]);
    }

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [24, 24] });
    } else {
      map.setView([20, 0], 2);
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}
