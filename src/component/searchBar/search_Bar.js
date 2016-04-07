import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index.js';

import './search_bar.pcss';

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
                    placeholder='Get forecast for the next 5 days (New York,US)'
                    className='form-control' />
                <span className="input-group-btn">
                    <button type='submit' className="btn btn-default">Submit</button>
                </span>
            </form>
        )
    }
}

SearchBar.propTypes = {
    fetchWeather: PropTypes.func
}


export default connect(null,{ fetchWeather })(SearchBar);
