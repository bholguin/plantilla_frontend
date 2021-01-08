import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
    button_remote: {
        backgroundColor: '#4d4343',
        color: 'white',
        marginLeft: '90%',
        '&:hover': {
            backgroundColor: '#4d4343'
        }
    }
});

const RemoteButton = (props) => {
    const classes = useStyles();
    const { handleSubmit } = useForm()
    return (
        <Button className={classes.button_remote} onClick={handleSubmit(props.submit)}>{props.tittle}</Button>
    )
}

RemoteButton.propTypes = {
    tittle: PropTypes.string.isRequired,
    submit: PropTypes.func.isRequired
}

export default RemoteButton;