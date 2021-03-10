//modal
import React, { Fragment, forwardRef } from 'react';
import RemoteButton from '../remote_button/index';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { useCOE } from "./hook";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="left" ref={ref} {...props} />;
})

const CreateOrEdit = (props) => {
    console.log(props)
    const {
        open,
        initialValues,
        buttonProps,
        closeModal
    } = useCOE()
    console.log(buttonProps, 'buton')
    const {
        getValues
    } = props

    const submit = () =>{
        buttonProps.submit({}, getValues());
    }
    return (
        <Fragment>
            <Dialog
                fullScreen
                fullWidth={true}
                open={open}
                TransitionComponent={Transition}>
                <AppBar >
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => closeModal()} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <RemoteButton tittle={buttonProps.tittle} submit={submit} />
                    </Toolbar>
                </AppBar>
                <Fragment>
                    {props.children}
                </Fragment>
            </Dialog>
        </Fragment>
    )
}

CreateOrEdit.propTypes ={
    getValues: PropTypes.func.isRequired
}

export default connect(state => ({
    coe_model: state.createoredit
}), actions)(CreateOrEdit);