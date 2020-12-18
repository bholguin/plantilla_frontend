//modal
import React from 'react';
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

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class CreateOrEdit extends React.Component {
    render() {
        const { coe_model } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen
                    fullWidth={true}
                    open={coe_model.open}
                    onClose={() => {this.props.CloseCOEModal()}}
                    TransitionComponent={Transition}>
                    <AppBar >
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => {this.props.CloseCOEModal()}} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" >

                            </Typography>
                            <RemoteSubmitButton formName={coe_model.formName} />
                        </Toolbar>
                    </AppBar>
                    <div>
                        {coe_model.content}
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default connect(state => ({
    coe_model: open
}), actions)(CreateOrEdit);