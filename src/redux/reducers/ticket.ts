import { TRAVEL } from "../../constants"

export { }

type TicketType = {
    city: string
    date: Date
}

export type InitialStateType = {
    ticketFrom: TicketType
    ticketTo: TicketType
}

const initialState: InitialStateType = {
    ticketFrom: {
        city: "Kiev",
        date: new Date()
    },
    ticketTo: {
        city: "Poltava",
        date: new Date(2021, 2, 1)
    }
}

const ticketReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TRAVEL.TICKET.SET_CITY_FROM:
            console.log(TRAVEL.TICKET.SET_CITY_FROM);
            return { ...state };
        case TRAVEL.TICKET.SET_CITY_TO:
            console.log(TRAVEL.TICKET.SET_CITY_TO);
            return { ...state };
        default:
            return { ...state }

    }
}

export default ticketReducer;