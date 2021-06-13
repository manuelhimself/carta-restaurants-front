import React, { Component } from 'react';
import axios from 'axios';
import { TileLayer, Marker, MapContainer, Popup, CircleMarker, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


class ProfileMap extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (this.props.establimentArr.map((establiment) =>
            <div className="container">
                <MapContainer center={[establiment.lat, establiment.lng]} zoom={15}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url=" https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
                    />
                    <Marker position={[establiment.lat, establiment.lng]} />
                </MapContainer>
            </div>
        ));
    }
}

export default ProfileMap;
