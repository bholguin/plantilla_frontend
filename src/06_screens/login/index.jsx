import React, { Fragment } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import classNames from 'classnames'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ImgQueso from '../../00_utilities/img/queso.jpg';
import ImgSig from '../../00_utilities/img/sig.fw_.png';
import { makeStyles } from '@material-ui/core/styles';
import { FormInputLogin } from '../../00_utilities/fields';
import Alert from '@material-ui/lab/Alert';

//hook
import { useLogin } from "./hook";

const useStyles = makeStyles({
    cardStyle: {
        width: '30%',
        margin: '0 auto',
        marginTop: '100px',
        backgroundColor: '#3D4158'
    },
    cardImgStyle: { paddingTop: '55%' },
    buttonStyle: { width: '100%', backgroundColor: '#F0EEEE' }
});

const Login = () => {

    const { Login, auth } = useLogin()
    const methods = useForm()
    const { handleSubmit } = methods;
    const classes = useStyles();

    if (auth.isAuthenticated) {
        return <Redirect to="/app" />
    }

    return (
        <Fragment>
            <Card className={classes.cardStyle}>
                <CardMedia
                    className={classes.cardImgStyle}
                    image={ImgSig}
                    title="Quesos"
                />
                <form onSubmit={handleSubmit(Login)}>
                    <CardContent>
                        <FormProvider {...methods}>
                            <FormInputLogin
                                name="username"
                                label="Username"
                                fullWidth={true}
                                autoFocus={true}

                            />
                            <FormInputLogin
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth={true}
                            />
                        </FormProvider>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            className={classNames(classes.buttonStyle, 'col-12')}
                            //disabled={submitting || pristine}
                            type='submit'
                        >
                            Ingresar
                        </Button>
                    </CardActions>
                </form>
                {
                    auth.errors &&
                    <Alert severity="error">{auth.errors}</Alert>
                }
            </Card>
        </Fragment>
    )
};

export default Login;