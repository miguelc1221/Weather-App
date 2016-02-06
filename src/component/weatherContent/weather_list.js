import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherItem from './weather_Item.js';
// import './weather_item.css';

class WeatherList extends Component {
    render () {
        return (
            <div>
                <WeatherItem />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}
// <span className='circle'>°</span>
export default connect(mapStateToProps)(WeatherList);
