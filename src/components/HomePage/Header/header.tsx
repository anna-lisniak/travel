import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'antd';
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import "./header.scss";
import { InitialStateType } from "../../../redux/reducers/ticket";
import { LocationType } from "../../../redux/reducers/location";

type PropsType = {
    ticket: InitialStateType
    setCityTo: (city: string) => void
    setCityFrom: (city: string) => void
    location: LocationType
}

type cities = {
    city: string
    country: string
    countryCode: string
    formattedAddress: string
    latitude: number
    longitude: number
    neighbourhood: string
    provider: "openstreetmap"
    state: string
}

const Header: React.FC<PropsType> = ({ location }) => {

    const [selectedDateStart, setSelectedDateStart] = useState<Date | null>(new Date());
    const [selectedDateEnd, setSelectedDateEnd] = useState<Date | null>(new Date());
    const [selectedCities, setSelectedCities] = useState({
        from: {
            city: location.city || "",
            focused: false
        },
        to: {
            city: "",
            focused: false
        }
    })
    const [cities, setCities] = useState<cities[]>([]);

    const controllerRef = useRef<AbortController | null>();

    useEffect(() => {
        async function search() {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
            const controller = new AbortController();
            controllerRef.current = controller;
            try {
                const direction = "from";
                fetchListOfStates(selectedCities.from.city, direction);
            } catch (e) { }
        }
        search();
    }, [selectedCities.from]);

    useEffect(() => {
        const direction = "from";
        fetchListOfStates(selectedCities.from.city, direction)
    }, [selectedCities.from]);

    useEffect(() => {
        async function search() {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
            const controller = new AbortController();
            controllerRef.current = controller;
            try {
                const direction = "to";
                fetchListOfStates(selectedCities.to.city, direction);
            } catch (e) { }
        }

        search();
    }, [selectedCities.to]);

    useEffect(() => {
        const direction = "to";
        fetchListOfStates(selectedCities.to.city, direction)
    }, [selectedCities.to]);

    const handleDateStartChange = (date: Date | null) => {
        setSelectedDateStart(date);
    };

    const handleDateEndChange = (date: Date | null) => {
        setSelectedDateEnd(date);
    };

    const fetchListOfStates = async (value: string, direction: string) => {
        const response = await fetch(`https://3a6852dee9c3.ngrok.io/map/by_address?address=${value}`, {
            signal: controllerRef.current?.signal
        });
        const data = await response.json();
        switch (direction) {
            case "from":
                setCities(data);
                break;
            case 'to':
                setCities(data);
                break;
            default:
                console.error("Can't find right direction")
                break;
        }
    }

    const directionSwitched = () => {
        console.log('switched');
        
        setSelectedCities({
            from: selectedCities.to,
            to: selectedCities.from
        })
    }

    return (
        <div className="navigation-container">
            <div className="navigation-content">
                <input
                    onChange={({ target: { value } }) => setSelectedCities({
                        ...selectedCities,
                        from: {
                            ...selectedCities.from,
                            city: value
                        }
                    })}
                    onFocus={() => console.log("open from")}
                    onBlur={() => console.log("close from")}
                    className="custom-input place"
                    value={selectedCities.from.city}
                />
                <Tooltip title="Switch direction" color="cyan" mouseLeaveDelay={0}>
                    <FontAwesomeIcon
                        onClick={directionSwitched}
                        icon={faArrowsAltH}
                        size="2x"
                    />
                </Tooltip>
                <input
                    onChange={({ target: { value } }) => setSelectedCities({
                        ...selectedCities,
                        to: {
                            ...selectedCities.to,
                            city: value
                        }
                    })}
                    onFocus={() => console.log("open to")}
                    onBlur={() => console.log("close to")}
                    placeholder="Berlin"
                    className="custom-input place"
                    value={selectedCities.to.city}
                />
                <div className="date-picker custom-input">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-start-date"
                            value={selectedDateStart}
                            onChange={handleDateStartChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className="date-picker custom-input">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-end-date"
                            value={selectedDateEnd}
                            onChange={handleDateEndChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </div>
            <div className="navigation-button">
                <button className="custom-input">Let's find a flight!</button>
            </div>
        </div>
    );
}

export default Header;