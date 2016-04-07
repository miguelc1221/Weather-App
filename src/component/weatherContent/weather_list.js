import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FadeLoader } from 'halogen';

import WeatherItem from './weather_Item.js';
import GoogleMap from '../googleMap/google_map';

class WeatherList extends Component {
    renderWeatherItems() {
        var { weather } = this.props;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayObj = new Date();
        var today = dayObj.getDay();

        return weather.weather.map((day, ind) => {
            return (
                <div className='weather-list' key={day.date_epoch}>
                    <WeatherItem
                        temp={Math.round(day.day.avgtemp_f)}
                        wind={Math.round(day.day.maxwind_mph)}
                        description={day.day.condition.text}
                        icon={day.day.condition.icon}
                        day={days[ind + today]}
                        />
                </div>
            )
        })
    }

    render () {
        var map;
        var weatherContent;

        if (this.props.weather.city) {
            map = <GoogleMap lat={this.props.weather.lat} lon={this.props.weather.lon} />
        }

        if (this.props.weather.isLoading) {
            weatherContent = <FadeLoader className='spinner' size="5px" color='#da1a0c'/>
        } else {
            if (this.props.weather.noWeather) {
                weatherContent = <div className='cityNotFound'>City not found, please try again</div>
            } else {
                weatherContent = <div>
                                    <h2 className='city'>{this.props.weather.city} {this.props.weather.country}</h2>
                                    <div className='text-center'>
                                        {this.renderWeatherItems()}
                                    </div>

                                    <div className='googleMap'>
                                        {map}
                                    </div>
                                </div>
            }
        }

        return (
            <div>
                { weatherContent }
            </div>
        );
    }
}

WeatherList.propTypes = {
    weather: PropTypes.shape({
        weather: PropTypes.array,
        isLoading: PropTypes.bool.isRequired,
        noWeather: PropTypes.bool.isRequired,
        city: PropTypes.string,
        country: PropTypes.string,
        lat: PropTypes.number,
        lon: PropTypes.number
    })
}
function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
