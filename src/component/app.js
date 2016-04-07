import React, { Component } from 'react';
import './app.pcss';

import SearchBar from './searchBar/search_Bar';
import WeatherList from './weatherContent/weather_list.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Weather Lookup</h1>
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}
