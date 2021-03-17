import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"
import React, { Fragment } from "react"
import { InputForm } from "../../../../../00_utilities/fields";
import 'w3-css/w3.css'
import { useUser } from "../../hook";

const Form = () => {

    const {
        model, 
        createoredit,
        handleFormClose
    } = useUser()

    console.log(createoredit, 'creat')

    return (
        <Fragment>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={createoredit.open}
            >
                <DialogTitle className={'w3-center '}>
                    <span className='w3-medium'>{'FORMULARIO DE USUARIOS'}</span>
                </DialogTitle>
                <form>
                    <DialogContent>
                        <InputForm label='Nombre' type='text' name='nombre' placeholder={'ingrese nombre...'} />
                        <InputForm label='Apellido' type='text' name='apellido' placeholder={'ingrese apellido...'} />
                        <InputForm label='Username' type='text' name='username' placeholder={'ingrese username...'} />
                        <InputForm label='Password' type='password' name='password' placeholder={'ingrese password...'} />
                    </DialogContent>
                    <DialogActions className='w3-margin-top'>
                        <Button className={'w3-indigo'}>{'crear'}</Button>
                        <Button className={'w3-dark-grey'} onClick={handleFormClose}>{'cancelar'}</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Fragment>
    )
}

export default Form