import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@common/App';

hydrate(
    <BrowserRouter>
        <App data={window.__INITIAL_DATA__}/>
    </BrowserRouter>,
    document.getElementById("app")
)