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
    } = useCreateOrEdit({ reset })

    return (
        <Workspace>
            <Fragment>
                <span className='w3-medium'>{'FORMULARIO DE USUARIO'}</span>
                <form onSubmit={handleSubmit(submit)}>
                    <Fragment>
                        <InputForm
                            label='Nombre'
                            ref={register({ required: true })}
                            errors={errors}
                            type='text'
                            name='nombre'
                            placeholder={'ingrese nombre...'}
                        />
                    </Fragment>
                    <Fragment>
                        <InputForm
                            label='Apellido'
                            ref={register({ required: true })}
                            type='text'
                            name='apellido'
                            errors={errors}
                            placeholder={'ingrese apellido...'}
                        />
                    </Fragment>
                    <Fragment>
                        <InputForm
                            label='Username'
                            ref={register({ required: true })}
                            type='text'
                            errors={errors}
                            name='username'
                            placeholder={'ingrese username...'}
                        />
                    </Fragment>
                    {action === "crear" && <Fragment>
                        <InputForm
                            label='Password'
                            ref={register({ required: true })}
                            type='password'
                            name='password'
                            placeholder={'ingrese password...'}
                        />
                    </Fragment>}
                    <Fragment>
                        <Button type='submit' className={'w3-indigo'}>{action === "crear" ? "crear" : "editar"}</Button>
                    </Fragment>
                </form>
            </Fragment>
        </Workspace>
    )
}

export default EmpresaCreateOrEdit