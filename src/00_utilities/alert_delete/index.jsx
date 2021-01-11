import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../..01_actions'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const alertDelete = (props) => {

    const [open, setOpen] = React.useState(false);
    console.log(props)
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Esta seguro que desea borrar el siguiente elemento ?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
          </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
          </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStatetoProps = (state) => { return { alertdelete: state.alertdelete} }

export default connect(mapStatetoProps, actions)(alertDelete);