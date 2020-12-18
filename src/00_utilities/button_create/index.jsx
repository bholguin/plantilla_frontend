import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { button_create } from '../css';

const ButtonCreate = (props) => {
    return (
        <IconButton variant="fab" color="secondary" aria-label="add" style={button_create} onClick={() => props.createFunc}>
            <AddIcon />
        </IconButton>
    );
}

export default ButtonCreate;