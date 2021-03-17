import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"
import React, { Fragment } from "react"
import { useForm } from 'react-hook-form';
import { InputForm } from "../../../../../00_utilities/fields";
import 'w3-css/w3.css'
import { useUser } from "../../hook";

const Form = () => {
    const { register, handleSubmit } = useForm()
    const {
        model,
        createoredit,
        handleFormClose
    } = useUser()

    const submit = (data) => {
        console.log(data, 'submit form')
    }


    return (
        <Fragment>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={createoredit.open}
            >
                <DialogTitle className={'w3-center'}>
                    <span className='w3-medium'>{'FORMULARIO DE USUARIOS'}</span>
                </DialogTitle>
                <form onSubmit={handleSubmit(submit)}>
                    <DialogContent>
                        <InputForm label='Nombre' ref={register} defaultValue={model.nombre} type='text' name='nombre' placeholder={'ingrese nombre...'} />
                        <InputForm label='Apellido' ref={register} defaultValue={model.apellido} type='text' name='apellido' placeholder={'ingrese apellido...'} />
                        <InputForm label='Username' ref={register} defaultValue={model.username} type='text' name='username' placeholder={'ingrese username...'} />
                        <InputForm label='Password' ref={register} defaultValue={model.public_id} type='password' name='password' placeholder={'ingrese password...'} />
                    </DialogContent>
                    <DialogActions className='w3-margin-top'>
                        <Button type='submit' className={'w3-indigo'}>{createoredit.buttonProps.tittle}</Button>
                        <Button className={'w3-dark-grey'} onClick={handleFormClose}>{'cancelar'}</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Fragment>
    )
}

export default Form