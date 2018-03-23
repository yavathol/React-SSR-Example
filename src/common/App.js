import React, { Component } from 'react';
import { SearchResults } from '@components';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="title">
                    React SSR and Router v4 example.
                </p>
                <hr />
                <h1>Search results</h1>
                <SearchResults queryData={this.props.data} />
            </div>
        )
    }
}

export default App;