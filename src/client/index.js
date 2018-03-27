import React from 'react'
import { hydrate } from 'react-dom';

import App from '@common/App';

hydrate(
    <App name="John"/>,
    document.getElementById('app')
)