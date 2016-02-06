import { combineReducers } from 'redux';
import weatherReducer from '../reducers/weather_reducer.js';

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;
