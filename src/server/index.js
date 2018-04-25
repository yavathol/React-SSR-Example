import express from 'express';
import cors from 'cors';
import {renderToString} from 'react-dom/server';
import React from 'react';
import {ServerStyleSheet} from 'styled-components';
import "isomorphic-fetch";

import App from '@common/App';
import {StaticRouter} from 'react-router-dom'
import {Html} from '@lib';
import * as constants from '@constants';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    const { APP_TITLE, BUNDLE_PATH, DEFAULT_LOCATION } = constants;
    const sheet = new ServerStyleSheet();

    fetch(`https://jobs.github.com/positions.json?description=javascript&location=${DEFAULT_LOCATION}`)
        .then(response => response.json())
        .then(jsonData => {
            const markup = renderToString(sheet.collectStyles(<StaticRouter context={{}}/* location={req.url}*/><App data={jsonData}/></StaticRouter>));
            const styles = sheet.getStyleTags();
            res.send(Html(APP_TITLE, BUNDLE_PATH, jsonData, styles, markup));
        });
})

app.listen(3000, () => {
    console.log(`Server is listening on port: ${constants.PORT}`)
});