import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { button_create } from '../css';
import PropTypes from 'prop-types';

const ButtonCreate = (props) => {
    const {
        open_modal,
        buttonProps
    } = props;
    return (
        <IconButton variant="fab" color="secondary" aria-label="add" style={button_create} onClick={() => open_modal(buttonProps)}>
            <AddIcon />
        </IconButton>
    );
}

ButtonCreate.propTypes = {
    open_modal: PropTypes.func.isRequired,
    buttonProps: PropTypes.object.isRequired
}

export default ButtonCreate;
