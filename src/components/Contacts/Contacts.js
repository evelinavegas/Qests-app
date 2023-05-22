

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import MarkerImg from '../img/marker.svg'

function Contacts() {
    
    const position = [49.835775, 24.113150];
    const zoom = 11
    const MarkerEl = new L.Icon({
        iconUrl: `${MarkerImg}`,
        iconSize: [35, 51],
        popupAnchor: [1, -20],
    });
    return(
        <div className='contacts-wrap'>
            <div className='contacts-title'>
                <p className='text-yelow'>Квести Львів</p>
                <h2>Контакти</h2>
            </div>
            <div className="flex-row contacts-container">
                <div className="contacts-info">
                    <h3>Адреса:</h3>
                    <p>Львів. Незалежності 15б</p>
                    <h3>Режим робот</h3>
                    <p>Щодня, з 9:00 до 20:00</p>
                    <h3>Телефон</h3>
                    <a href="tel:8-800-333-55-99">8 (800) 333-55-99</a>
                    <h3>E-mail</h3>
                    <a href= "mailto:info@escape-room.ua">info@escape-room.ua</a>
                </div>
                <div className="contacts-map">
                <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={MarkerEl} >
                    <Popup className='map-popup'>
                        Квест кімната
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>    
    )
}
export default Contacts