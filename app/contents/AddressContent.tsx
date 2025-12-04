"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = new L.Icon({
    iconUrl: "/marker-icon.png", // bisa custom icon
    iconSize: [32, 48],
});

export default function AddressContent() {
    return (
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <MapContainer
                center={[-8.65, 115.21]} // koordinat glamping
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-8.65, 115.21]} icon={icon}>
                    <Popup>
                        📍 Lokasi Glamping<br />Welcome to Nature!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}