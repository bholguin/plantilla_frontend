import { Button } from "@material-ui/core"
import React, { Fragment } from "react"
import { useForm } from "react-hook-form"
import { InputForm } from "../../../../00_utilities/fields"
import Workspace from "../../../../workspace"

import { useCreateOrEdit } from "./hook"
const EmpresaCreateOrEdit = () => {

    const { register, handleSubmit, errors, reset } = useForm()
    const {  
        action,
        submit 
    } = useCreateOrEdit({reset})

    return (
        <Workspace>
            <Fragment>
                <span className='w3-medium'>{'FORMULARIO DE EMPRESAS'}</span>
                <form onSubmit={handleSubmit(submit)}>
                    <Fragment>
                        <InputForm
                            label='Nombre de la empresa'
                            ref={register({ required: true })}
                            type='text'
                            name='nombre'
                            errors={errors}
                            placeholder={'ingrese nombre...'}
                        />
                    </Fragment>
                    <Fragment>
                        <InputForm
                            label='Nit'
                            ref={register({ required: true })}
                            type='number'
                            name='nit'
                            errors={errors}
                            placeholder={'ingrese el nit...'}
                        />
                    </Fragment>
                    <Fragment>
                        <InputForm
                            label='Dirección'
                            ref={register({ required: true })}
                            type='text'
                            name='direccion'
                            errors={errors}
                            placeholder={'ingrese la dirección...'}
                        />
                    </Fragment>
                    <Fragment>
                        <InputForm
                            label='Telefono'
                            ref={register({ required: true })}
                            type='number'
                            name='telefono'
                            errors={errors}
                            placeholder={'ingrese el telefono...'}
                        />
                    </Fragment>
                    <Fragment>
                        <Button type='submit' className={'w3-indigo'}>{action === "crear" ? "crear" : "editar"}</Button>
                    </Fragment>
                </form>
            </Fragment>
        </Workspace>
    )
}

export default EmpresaCreateOrEdit