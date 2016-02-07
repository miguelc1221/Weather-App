import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index.js';

import './search_bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: ''}

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchWeather(this.state.inputValue);
    }
    handleOnChange(e) {
        this.setState({ inputValue: e.target.value });
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit} className='input-group'>
                <input
                    type='text'
                    onChange={this.handleOnChange}
                    value={this.state.inputValue}
                    placeholder='Get forecast for the next 5 days'
                    className='form-control' />
                <span className="input-group-btn">
                    <button type='submit' className="btn btn-default">Submit</button>
                </span>
            </form>
        )
    }
}


export default connect(null,{ fetchWeather })(SearchBar);
