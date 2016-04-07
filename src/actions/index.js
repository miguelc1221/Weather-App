import axios from 'axios';
import config from '../config/config.js';

const API_KEY = config.secretKey;
const ROOT_URL = 'https://api.apixu.com/v1/forecast.json';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const IS_LOADING = 'IS_LOADING';
export const NO_WEATHER = 'NO_WEATHER';

function isLoading(ans) {
    return {
        type: IS_LOADING,
        payload: ans
    }
}

export function fetchWeather(city) {
    const url = `${ROOT_URL}?key=${API_KEY}&q=${city}&days=5`;

    return (dispatch) => {
        dispatch(isLoading(true))
        return axios.get(url)
            .then((res) => {
                dispatch({
                    type: FETCH_WEATHER,
                    payload: res.data.forecast.forecastday,
                    lat: res.data.location.lat,
                    lon: res.data.location.lon,
                    city: res.data.location.name,
                    country: res.data.location.country
                 })
            })
            .catch((res) => {
                dispatch({
                    type: NO_WEATHER
                })
            });
    }
}
