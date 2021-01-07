//modal
import React, { Fragment, forwardRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';
import * as actions from '../../01_actions/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
//import RemoteSubmitButton from "./remoteSubmitButton";
//import globalStyles from '../../css/global';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="left" ref={ref} {...props} />;
})

const CreateOrEdit = (props) => {
    console.log(props);
    return (
        <Fragment>
            <Dialog
                fullScreen
                fullWidth={true}
                open={props.coe_model}
                onClose={() => { props.CloseCOEModal() }}
                TransitionComponent={Transition}>
                <AppBar >
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => props.CloseCOEModal()} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Fragment>
                    {props.children}
                </Fragment>
            </Dialog>
        </Fragment>
    )
}

export default connect(state => ({
    coe_model: state.createoredit.open
}), actions)(CreateOrEdit);