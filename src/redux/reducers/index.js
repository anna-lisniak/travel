import { combineReducers } from 'redux';
import location from './location';
import ticket from "./ticket";

export default combineReducers({
    location,
    ticket
});