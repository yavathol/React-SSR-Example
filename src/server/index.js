import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import App from '@common/App';
import React from 'react';

import { Html } from '@lib';
import * as constants from '@constants';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    const markup = renderToString(<App name="Jan" />);

    res.send(Html(constants.APP_TITLE, markup, './bundle.js'));
})

app.listen(3000, () => {
    console.log(`Server is listening on port: ${constants.PORT}`)
});