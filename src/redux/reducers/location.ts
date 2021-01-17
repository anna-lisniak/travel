import { TRAVEL } from "../../constants";

export type LocationType = {
    city?: string
    country?: string
    lat: number
    lng: number
    zoom: number
}
export type InitialStateType = {
    currentLocation: LocationType
    selectedLocation: LocationType
}

const initialState: InitialStateType = {
    currentLocation: {
        city: "Brussels",
        lat: 50,
        lng: 30,
        zoom: 12,
    },
    selectedLocation: {
        lat: 0,
        lng: 0,
        zoom: 10,
        city: "Kiev"
    }
};

const locationReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'NEW_CITY_TO_TRAVEL':
            return { ...state }
        case 'BUTTON_CLICKED': {
            return { ...state };
        }
        case TRAVEL.MAP.SET_USER_LOCATION: {
            const { lat, lng } = action.payload;
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    lat,
                    lng,
                    zoom: 12,
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default locationReducer;