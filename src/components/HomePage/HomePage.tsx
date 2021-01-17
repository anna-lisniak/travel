import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Tooltip } from 'antd';
import { faMapMarkerAlt, faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Navbar from '../Navbar';
import Header from "./Header/HeaderComponent";

import Map from "./Map/MapContainer"


const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Map />
        </>
    );
}

export { HomePage };