import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import PropTypes from "prop-types";
import { TextField, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormContext, Controller } from 'react-hook-form';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffff',
        },
        secondary: {
            main: '#ffff',
        },
    },
    overrides: {
        MuiInput: {
            root: {
                borderRadius: 0,
                color: "#fff",
            },
            underline: {
                "&&&&:before": {
                    borderBottom: "1px solid rgba(255, 255, 255)"
                }
            }
        },
        MuiFormLabel: {
            root: {
                color: "#fff",
                fontSize: '16px'
            }
        }
    }
});

export const FromInput = (props) => {
    const { control } = useFormContext();
    const { name, label } = props;
    return (
        <ThemeProvider theme={theme}>
            <Controller
                as={TextField}
                name={name}
                control={control}
                defaultValue=""
                label={label}
                {...props}
            />
        </ThemeProvider>
    );
}


const useStyles = makeStyles({
    root: {
        color: '#F0EEEE'
    },
    input: {
        color: 'white'
    },
    textField: {
        color: 'white'
    }
});


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