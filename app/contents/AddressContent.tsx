"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// FIX missing default icon
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

// custom pin
const pin = new L.Icon({
    iconUrl: "/images/pin.png",
    iconSize: [32, 32],
});

export default function AddressContent() {
    return (
        <div className=" rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-[350px] rounded-xl overflow-hidden border border-emerald-200 shadow relative">
                <MapContainer
                    center={[-8.65, 115.21]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full w-full absolute inset-0 z-10"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap'
                    />

                    <Marker position={[-8.65, 115.21]} icon={pin}>
                        <Popup>
                            📍 Lokasi Glamping<br />Welcome to Nature!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

            {/* TEXT */}
            <div className="space-y-3 text-gray-700">
                <h3 className="text-2xl font-bold text-emerald-600">Lokasi Glamping</h3>
                <p className="leading-relaxed">
                    Temukan kami di tengah kesejukan pegunungan.
                </p>
                <p>
                    📍 <b>Alamat:</b> Desa Lembah Hijau, Bali
                </p>
                <p>
                    📍 <b>Koordinat:</b> -8.65, 115.21
                </p>
            </div>

        </div>
    );
}
