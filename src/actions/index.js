import axios from 'axios';
import config from '../config/config.js';

const API_KEY = config.apiKey;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const IS_LOADING = 'IS_LOADING';

function isLoading(ans) {
    return {
        type: IS_LOADING,
        payload: ans
    }
}

export function fetchWeather(city) {
    const url = `${ROOT_URL}?q=${city},us&units=imperial&cnt=5&appid=${API_KEY}`;
    const request = axios.get(url);

    return (dispatch) => {
        dispatch(isLoading(true))
        return axios.get(url)
            .then((res) => {
                dispatch({
                    type: FETCH_WEATHER,
                    payload: res.data.list,
                    lat: res.data.city.coord.lat,
                    lon: res.data.city.coord.lon,
                    city: res.data.city.name
                 })
            });
    }
}
