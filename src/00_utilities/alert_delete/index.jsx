import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useAlertDelete } from "./hook";


const AlertDelete = () => {
    const{
        open,
        closeModal
    }= useAlertDelete()


    return (
        <Dialog
            open={open}
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
                <Button onClick={closeModal} color="primary">
                    Disagree
          </Button>
                <Button onClick={closeModal} color="primary" autoFocus>
                    Agree
          </Button>
            </DialogActions>
        </Dialog>
    )
}


export default AlertDelete;