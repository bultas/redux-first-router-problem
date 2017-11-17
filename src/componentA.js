import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ComponentA({ type }) {
    return type;
}

ComponentA.propTypes = {
    type: PropTypes.string.isRequired
}

export const ComponentAConnector = connect(({ router: { type } }) => {
    return {
        type
    };
})(ComponentA);
