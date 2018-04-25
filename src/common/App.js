import React, {Component} from 'react';
import {Header, SearchResults} from '@components';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="title">
                    React SSR and Router v4 example.
                </p>
                <hr />
                <Switch>
                    <Route exact path="/about" render={() => <About/>}/>
                    <Route exact path="/summary" render={() => <Summary queryData={this.props.data}/>}/>
                    <Route path="/" render={() => <SearchResults queryData={this.props.data}/>}/>
                </Switch>
               
                <SearchResults queryData={this.props.data} />
            </div>
        )
    }
}

export default App;