import { FETCH_WEATHER, IS_LOADING } from '../actions/index.js';

const INITIAL_STATE = {
    isLoading: false,
    weather: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return { ...state, isLoading: false, weather: action.payload };
        case IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state;
    }
};
