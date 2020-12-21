import React from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import store from '../store';
import { signin } from '../store/actions/userActions';
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    }
}))

interface FormData {
    email: string;
    password: string;
}

const SignInPage = () => {
    const classes = useStyles();
    const { handleSubmit, register } = useForm<FormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        store.dispatch(signin({ user_password: data.password, user_email: data.email }))


    });
    return (
        <Container className={classes.container} maxWidth="xs">
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={register}
                                    label="Email"
                                    name="email"
                                    size="small"
                                    variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    inputRef={register}
                                    label="Password"
                                    name="password"
                                    size="small"
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={onSubmit}
                            color="primary"
                            fullWidth
                            type="button"
                            variant="contained">
                            Log in
                        </Button>

                    </Grid>

                    <Grid item xs={12}>
                        <p>Don't have an Account?</p>
                        <Link to="/signup" style={{ textDecoration: "none" }}>
                            sign up
                        </Link>
                    </Grid>



                </Grid>
            </form>

        </Container >

    )
}

export default SignInPage