import { TRAVEL } from "../../constants";

type SetUserLocationActionType = {
    type: typeof TRAVEL.MAP.SET_USER_LOCATION
    payload: {
        lat: number
        lng: number
    }
}

const setUserLocation = (lat: number, lng: number): SetUserLocationActionType => ({
    type: TRAVEL.MAP.SET_USER_LOCATION,
    payload: { lat, lng }
})

const location = {
    setUserLocation
}

export {
    location
}