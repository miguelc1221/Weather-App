import React from 'react';
import './weather_item.css';

export default (props) => {

    return (
        <div>
            <div className="panel panel-default weather-panel">
                <div className="panel-heading weather-heading">{props.day}</div>
                <div className="panel-body weather-body">
                    <span className='temp'>{props.temp}<span id='degreeSymbol'>°</span><span id='degree'>F</span></span>
                </div>
                <div>
                    Wind: {props.wind} mph(s)
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    );

}
