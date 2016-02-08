import { FETCH_WEATHER, IS_LOADING } from '../actions/index.js';

const INITIAL_STATE = {
    isLoading: false,
    city: null,
    country: null,
    lat: null,
    lon: null,
    weather: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return { ...state, isLoading: false, weather: action.payload, lat: action.lat, lon: action.lon, city: action.city + ',', country: action.country };
        case IS_LOADING:
            return { ...state, isLoading: true, city: null, country: null }
        default:
            return state;
    }
};
