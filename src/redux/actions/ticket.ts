import { strict } from "assert";
import { TRAVEL } from "../../constants";

type _payloadType = {
    city: string
}

type SetCityFromType = {
    type: typeof TRAVEL.TICKET.SET_CITY_FROM
    payload: _payloadType
}

const setCityFrom = (city: string): SetCityFromType => ({
    type: TRAVEL.TICKET.SET_CITY_FROM,
    payload: {
        city
    }
});

type SetCityToType = {
    type: typeof TRAVEL.TICKET.SET_CITY_TO
    payload: _payloadType
}

const setCityTo = (city: string): SetCityToType => ({
    type: TRAVEL.TICKET.SET_CITY_TO,
    payload: {
        city,
    }
});

const ticket = {
    setCityFrom,
    setCityTo
}

export {
    ticket
}