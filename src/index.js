import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './assets/style/global.css';


render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.getElementById('root')
)
