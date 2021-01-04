import React, { Fragment } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FromInput } from '../../../../00_utilities/fields/index';


export const useFormUser = (props) => {
    const methods = useForm()
    const { handleSubmit } = methods;
    return (
        <Fragment>
            <form>
                <FormProvider {...methods}>
                    <FromInput
                        name="username"
                        label="Username"
                        fullWidth={true}
                    />
                    <FromInput
                        name="lastname"
                        label="Lastname"
                        fullWidth={true}
                    />
                    <FromInput
                        name="password"
                        label="Pasword"
                        fullWidth={true}
                    />
                </FormProvider>
            </form>
        </Fragment>
    )
};



