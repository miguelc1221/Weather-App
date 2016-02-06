import axios from 'axios';

const API_KEY = '6d39df51df75a58c01b09987f9baf595';
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
                dispatch({ type: FETCH_WEATHER, payload: res.data.list })
            });
    }
}
