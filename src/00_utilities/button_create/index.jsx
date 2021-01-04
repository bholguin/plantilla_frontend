import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import * as actions from '../../01_actions/'
import { button_create } from '../css';

const ButtonCreate = (props) => {
    return (
        <IconButton variant="fab" color="secondary" aria-label="add" style={button_create} onClick={() => props.OpenCOEModal()}>
            <AddIcon />
        </IconButton>
    );
}

export default connect(()=>{return {}}, actions)(ButtonCreate);
