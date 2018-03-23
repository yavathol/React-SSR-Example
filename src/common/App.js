import React, { Component } from 'react';
import { SearchResults, Header } from '@components';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="title">
                    React SSR and Router v4 example.
                </p>
                <hr />
                <Header>
                    <h1>Search results</h1>
                </Header>
                <SearchResults queryData={this.props.data} />
            </div>
        )
    }
}

export default App;