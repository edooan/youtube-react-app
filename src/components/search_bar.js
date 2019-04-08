import React, { Component } from 'react';

export default class SearchBar extends Component {

    state = { term: '' }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTerm(term)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    placeholder='Search...'
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        )
    }
};
