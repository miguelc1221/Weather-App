import React from 'react';
import './weather_item.pcss';

export default (props) => {

    return (
        <div>
            <div className="panel panel-default">
                <div className="panel-heading">{props.day}</div>
                <div className="panel-body">
                    <span className='temp'>{props.temp}<span id='degreeSymbol'>°</span><span id='degree'>F</span></span>
                </div>
                <div>
                    Wind: {props.wind} mph(s)
                </div>
                <div>
                    {props.description}
                    <div>
                        <img src={props.icon} />
                    </div>
                </div>
            </div>
        </div>
    );

}
