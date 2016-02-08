import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherItem from './weather_Item.js';
import GoogleMap from '../googleMap/google_map';

class WeatherList extends Component {
    renderWeatherItems() {
        var { weather } = this.props;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return weather.weather.map((day, ind) => {
            return (
                <div className='weather-list' key={day.dt}>
                    <WeatherItem
                        temp={Math.round(day.temp.day)}
                        wind={Math.round(day.speed)}
                        description={day.weather[0].description}
                        day={days[ind]}
                        />
                </div>
            )
        })
    }

    render () {
        var map;
        if (this.props.weather.city) {
            map = <GoogleMap lat={this.props.weather.lat} lon={this.props.weather.lon} />
        }

        return (
            <div>
                <div className='text-center'>
                    {this.renderWeatherItems()}
                </div>

                <div className='googleMap'>
                    {map}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
