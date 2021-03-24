import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useAlertDelete } from "./hook";
import { deleteUser } from '../../04_provider/config/user';


const AlertDelete = () => {
    const{
        open,
        closeModal,
        deleteItem
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
                    {'Cancelr'}
          </Button>
                <Button onClick={deleteItem} color="primary" autoFocus>
                    {'Eliminar'}
          </Button>
            </DialogActions>
        </Dialog>
    )
}


export default AlertDelete;