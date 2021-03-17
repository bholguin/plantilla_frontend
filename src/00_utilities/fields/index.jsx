import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormContext, Controller } from 'react-hook-form';
import 'w3-css/w3.css'




const useStyles = makeStyles({
    root: {
        color: '#F0EEEE'
    },
    input: {
        color: 'white'
    },
    textField: {
        color: 'white'
    },
    input_field: {
        margin: '15px'
    }
});



export const InputForm = (props) => {
    const { label, type, name, value, placeholder } = props
    return (
        <Fragment>
            <div className='w3-margin'>
                <label className='w3-small'>{label}</label>
                <input
                    className="w3-input"
                    value={value}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    {...props}
                />
            </div>
        </Fragment>
    )
}


export const FromInput = (props) => {
    const { control } = useFormContext();
    const { name, label } = props;
    const classes = useStyles();
    return (
        <Controller
            as={TextField}
            name={name}
            className={classes.input_field}
            control={control}
            defaultValue=""
            label={label}
            {...props}
        />
    );
}

export const FormInputLogin = (props) => {
    const { control } = useFormContext();
    const { name, label } = props;
    return (
        <Controller
            as={TextField}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            {...props}
        />
    );
}




const renderTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => {
    let new_custom = custom;
    if (touched && error) {
        new_custom = { ...custom, helperText: error }
    }
    return (
        <Fragment>
            <TextField
                label={label}
                className={useStyles.root}
                margin="normal"
                error={error && touched}
                {...input}
                {...new_custom}
            />
        </Fragment>
    )
};

export const MyTextFieldSimple = (props) => {
    let normalize = null;
    if (props.case === 'U') {
        //normalize = upper
    } else if (props.case === 'L') {
        //normalize = lower
    }
    return (
        <Field
            fullWidth={true}
            label={props.nombre}
            name={props.name}
            helperText={props.helperText}
            {...props}
            component={renderTextField}
            autoComplete="off"
            normalize={normalize}
        />
    )
};



MyTextFieldSimple.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    nombre: PropTypes.string
};