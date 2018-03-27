import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="title">
                    React SSR and Router v4 example.
                    { this.props.name }
                </p>
            </div>
        )
    }
}

export default App;