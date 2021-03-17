import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { button_create } from '../css';
import PropTypes from 'prop-types';

const ButtonCreate = (props) => {
    const {
        handleForm
    } = props;
    return (
        <IconButton variant="fab" color="secondary" aria-label="add" style={button_create} onClick={() => handleForm()}>
            <AddIcon />
        </IconButton>
    );
}

ButtonCreate.propTypes = {
    handleForm: PropTypes.func.isRequired
}

export default ButtonCreate;
