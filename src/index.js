import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'store';

import { ContentConnector } from 'content.js';

render(
    React.createElement(Provider, { store }, React.createElement(ContentConnector)),
    document.querySelector('#app')
);
