import React, { Fragment, useState, useEffect, memo } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classNames from 'classnames'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ImgQueso from '../../../00_utilities/img/queso.jpg';
import * as actions from '../../../01_actions/index';
import { makeStyles } from '@material-ui/core/styles';
import { FromInput } from '../../../00_utilities/fields';
import Alert from '@material-ui/lab/Alert';

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

const Login = memo((props) => {
    const methods = useForm()
    const { handleSubmit } = methods;
    const [errorLogin, setErrorLogin] = useState(null);
    const { auth } = props;
    const classes = useStyles();
    useEffect(() => { setErrorLogin(auth.errors) }, [auth.errors]);

    if (auth.isAuthenticated) {
        return <Redirect to="/app" />
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
                        <FormProvider {...methods}>
                            <FromInput
                                name="username"
                                label="Username"
                                fullWidth={true}
                                autoFocus={true}  
                                
                            />
                            <FromInput
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
                    errorLogin &&
                    <Alert severity="error">{errorLogin}</Alert>
                }
            </Card>
        </Fragment>
    )
});

const mapPropsToState = (state) => { return { auth: state.auth } }
export default connect(mapPropsToState, actions)(Login);