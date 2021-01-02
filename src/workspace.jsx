import React from 'react';
import PropTypes from 'prop-types';
import Header from './00_utilities/header/header';


const Workspace = (props) => {
    return <Header body={props.children} />
}

Workspace.propTypes = {
    children: PropTypes.array.isRequired
}

export default Workspace;