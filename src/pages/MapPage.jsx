import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const Map = () => {
    const position = [-25.4249668, -49.2748809]
    return (
        <>
            <h2>Mapa Senai Celso Charuri</h2>
            <div>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "500px", height: "500px" }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}