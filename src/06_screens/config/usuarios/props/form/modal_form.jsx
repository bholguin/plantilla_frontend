import React, { Fragment } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FromInput } from '../../../../../00_utilities/fields/index';
import CreateOrEdit from '../../../../../00_utilities/CreateOrEdit';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    modal_body: {
        marginTop: '80px',
        padding: '20px'
    }
});

const ModalForm = (props) => {
    const methods = useForm()
    const classes = useStyles();
    const values = props.form.initialValues;
    return (
        <Fragment>
            <CreateOrEdit getValues={methods.getValues}>
                <form className={classes.modal_body}>
                    <FormProvider {...methods}>
                        <FromInput
                            name="nombre"
                            label="Name"
                            fullWidth={true}
                            defaultValue={values.nombre}
                        />
                        <FromInput
                            name="apellido"
                            label="Lastname"
                            fullWidth={true}
                            defaultValue={values.apellido}
                        />
                        <FromInput
                            name="username"
                            label="Username"
                            fullWidth={true}
                            defaultValue={values.username}
                        />
                        <FromInput
                            name="password"
                            label="Password"
                            type = 'password'
                            fullWidth={true}
                            defaultValue={values.username}
                        />
                    </FormProvider>
                </form>
            </CreateOrEdit>
        </Fragment>
    )
};

const mapPropsToState = (state) => { return { form: state.createoredit } }

export default connect(mapPropsToState, {})(ModalForm);