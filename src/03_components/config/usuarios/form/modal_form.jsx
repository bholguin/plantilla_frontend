import React, { Fragment } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FromInput } from '../../../../00_utilities/fields/index';
import CreateOrEdit from '../../../../00_utilities/CreateOrEdit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    modal_body: {
        marginTop: '100px',
        padding: '20px'
    }
});


const ModalForm = (props) => {
    const methods = useForm()
    //const { handleSubmit } = methods;
    const classes = useStyles();
    return (
        <Fragment>
            <CreateOrEdit>
                <form className={classes.modal_body}>
                    <FormProvider {...methods}>
                        <FromInput
                            name="name"
                            label="Name"
                            fullWidth={true}
                        />
                        <FromInput
                            name="lastname"
                            label="Lastname"
                            fullWidth={true}
                        />
                        <FromInput
                            name="username"
                            label="Username"
                            fullWidth={true}
                        />
                        <FromInput
                            name="password"
                            label="Pasword"
                            fullWidth={true}
                        />
                    </FormProvider>
                </form>
            </CreateOrEdit>
        </Fragment>
    )
};

export default ModalForm;