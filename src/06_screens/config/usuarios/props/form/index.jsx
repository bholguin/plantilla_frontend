import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"
import React, { Fragment } from "react"
import { useForm } from 'react-hook-form';
import { InputForm } from "../../../../../00_utilities/fields";
import 'w3-css/w3.css'
import { useUser } from "../../hook";

const Form = () => {
    const {
        model,
        createoredit,
        handleFormClose,
        submit
    } = useUser()
    const { register, handleSubmit, errors } = useForm()
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
                        <input ref={register} name='id' defaultValue={model.id} type='hidden' />
                        <InputForm label='Nombre' ref={register({required: true})} defaultValue={model.nombre} type='text' name='nombre' placeholder={'ingrese nombre...'} />
                        <p>{errors.nombre && "El nombre es requerido"}</p> 
                        <InputForm label='Apellido' ref={register({required: true})} defaultValue={model.apellido} type='text' name='apellido' placeholder={'ingrese apellido...'} />
                        <p>{errors.apellido && "El username es requerido"}</p> 
                        <InputForm label='Username' ref={register({required: true})} defaultValue={model.username} type='text' name='username' placeholder={'ingrese username...'} />
                        <p>{errors.username && "El nombre es requerido"}</p> 
                        <InputForm label='Password' ref={register({required: true})} defaultValue={model.password} type='password' name='password' placeholder={'ingrese password...'} />
                        <p>{errors.username && "El nombre es requerido"}</p> 
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