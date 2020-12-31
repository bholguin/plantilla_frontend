import React, { Fragment, useState } from "react";
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ImgQueso from '../../../00_utilities/img/queso.jpg';
import * as actions from '../../../01_actions/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: 'white',
    },
    cardStyle: {
        width: '30%',
        margin: '0 auto',
        marginTop: '100px',
        backgroundColor: '#3D4158'
    },
    cardImgStyle: { paddingTop: '55%' },
    buttonStyle: { width: '100%', backgroundColor: '#F0EEEE' }
});


const Login = (props) => {
    const { register, handleSubmit } = useForm();
    const [errorLogin, setErrorLogin] = useState(null);
    const { auth } = props;
    const classes = useStyles();

    if (auth.isAuthenticated) {
        return <Redirect to="/app" />
    }

    if (auth && auth.errors) {
        setErrorLogin(auth.errors)
    }

    const onSubmit = (data) => { props.login(data.username, data.password) }

    return (
        <Fragment>
            <Card className={classes.cardStyle}>
                <CardMedia
                    className={classes.cardImgStyle}
                    image={ImgQueso}
                    title="Quesos"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <input name="username" ref={register} placeholder="Username" />
                        <input name="password" ref={register} placeholder="Password" />
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            className='col-12'
                            className={classes.buttonStyle}
                            //disabled={submitting || pristine}
                            type='submit'
                        >
                            Ingresar
                        </Button>
                    </CardActions>
                </form>
                {
                    errorLogin &&
                    <div className='mt-3'>
                        <Typography variant="caption" gutterBottom color="error">
                            {errorLogin}
                        </Typography>
                    </div>
                }
            </Card>
        </Fragment>
    )
}

const mapPropsToState = (state) => { return { auth: state.auth } }
export default connect(mapPropsToState, actions)(Login);