import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ComponentB({ dispatch, id }) {
    return React.createElement(
        'div',
        null,
        React.createElement('div', null, id),
        React.createElement(
            'button',
            {
                onClick: () => {
                    setTimeout(function () {
                        dispatch({
                            type: 'ROUTE_A'
                        });
                    }, 100);
                }
            },
            'Go back'
        )
    );
}

ComponentB.propTypes = {
    id: PropTypes.string.isRequired
}

export const ComponentBConnector = connect(({ router: { payload: { id } } }) => {
    return {
        id
    };
})(ComponentB);
