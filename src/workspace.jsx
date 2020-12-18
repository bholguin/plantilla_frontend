import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './00_utilities/header/header';


class Workspace extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };
    render() {
        return (
            <Fragment>
                <Header body={this.props.children} />
            </Fragment>
        );
    }
}

export default Workspace;