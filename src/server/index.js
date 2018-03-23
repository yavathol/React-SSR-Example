import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';
import "isomorphic-fetch";

import App from '@common/App';
import { Html } from '@lib';
import * as constants from '@constants';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    const { APP_TITLE, BUNDLE_PATH, DEFAULT_LOCATION } = constants;

    fetch(`https://jobs.github.com/positions.json?description=javascript&location=${DEFAULT_LOCATION}`)
        .then(response => response.json())
        .then(jsonData => {
            const markup = renderToString(<App data={jsonData}/>);
            res.send(Html(APP_TITLE, BUNDLE_PATH, jsonData, markup));
        });
})

app.listen(3000, () => {
    console.log(`Server is listening on port: ${constants.PORT}`)
});