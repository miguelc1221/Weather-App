import { FETCH_WEATHER, IS_LOADING, NO_WEATHER } from '../actions/index.js';

const INITIAL_STATE = {
    isLoading: false,
    noWeather: false,
    city: null,
    country: null,
    lat: null,
    lon: null,
    weather: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return {
                ...state,
                isLoading: false,
                weather: action.payload,
                lat: action.lat,
                lon: action.lon,
                city: action.city + ',', 
                country: action.country,
                noWeather: false
            };
        case NO_WEATHER: {
            return { ...state, noWeather: true, isLoading: false }
        };
        case IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state;
    }
};
