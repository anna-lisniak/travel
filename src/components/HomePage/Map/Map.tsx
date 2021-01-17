import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'date-fns';
import { InitialStateType } from "../../../redux/reducers/location";


type PropsType = {
    location: InitialStateType
    setUserLocation: (lat: number, lng: number) => void
}

const Map: React.FC<PropsType> = ({ location, setUserLocation }) => {
    type ViewPortType = {
        latitude: number
        longitude: number
        width: string | number
        height: string | number
        zoom: number
    }

    const [viewport, setViewport] = useState<ViewPortType>({
        latitude: 50.4987648,
        longitude: 30.516838399999997,
        width: "100%",
        height: "100%",
        zoom: 15
    });


    useEffect(() => {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, [])

    const success = (position: any) => {
        const { latitude, longitude } = position.coords;
        setViewport({
            ...viewport,
            latitude,
            longitude,
        })
        setUserLocation(latitude, longitude);
    }

    function error() {
        console.log('Unable to retrieve your location');
    }

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/malaeva/cki3j0ut72qp919qqu5pedmza"
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            <Marker latitude={location.currentLocation.lat} longitude={location.currentLocation.lng}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x"></FontAwesomeIcon>
            </Marker>
        </ReactMapGL>
    );
}

export default Map;