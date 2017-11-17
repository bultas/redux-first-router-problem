
import React from 'react';
import { connect } from 'react-redux';

import { ComponentAConnector } from 'componentA';
import { ComponentBConnector } from 'componentB';

function Content({ type }) {
    if (type === 'ROUTE_B') {
        return React.createElement(ComponentBConnector);
    }
    return React.createElement(ComponentAConnector);
}

export const ContentConnector = connect(({ router: { type } }) => {
    return {
        type
    };
})(Content);
