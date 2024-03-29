import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types"

const AlertDelete = (props) => {

    const { open, onClose, onDelete } = props

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Esta seguro que desea borrar el siguiente elemento ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className={'w3-dark-grey'}>
                    {'Cancelar'}
                </Button>
                <Button onClick={onDelete} className={'w3-indigo'} autoFocus>
                    {'Eliminar'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

AlertDelete.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onDelete: PropTypes.func
}

AlertDelete.defaultProps = {
    open: false,
    onClose: () => { },
    onDelete: () => { }
}

export default AlertDelete;