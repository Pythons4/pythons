import React from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import store from '../store';
import { signin } from '../store/actions/userActions';
import Alert from '@material-ui/lab/Alert';
import { render } from '@testing-library/react';



const classes = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    }
}))

// interface FormData {
//     email: string;
//     password: string;
// }

// const classes = useStyles();
// interface State {
//     value: string;
//     alert: boolean;
// }
// interface Props {
//     alue: string,
//     alert: boolean
// }
class SignInPage extends React.Component<{}, { value: string; alert: boolean; useremail: string; userpass: string }>{
    // const { handleSubmit, register } = useForm<FormData>();

    constructor(props: any) {
        super(props)
        this.state = {
            alert: false,
            value: '',
            useremail: '',
            userpass: ''

        }
        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(data: any) {
        console.log(data);
        store.dispatch(signin({ user_password: this.state.useremail, user_email: this.state.userpass }))
        setTimeout(() => {
            console.log('This will run after 1 second!')
            if (store.getState().UserReducer.error === "wrong email") {
                console.log('hii')
                this.setState({
                    value: 'wrong Email',
                    alert: true
                })

            }
        }, 4000);


    };

    render() {
        return (
            <Container maxWidth="xs">
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        size="small"
                                        onChange={(e) => this.setState({ useremail: e.target.value })}
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        size="small"
                                        type="password"
                                        onChange={(e) => this.setState({ userpass: e.target.value })}

                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            {this.state.alert && <Alert severity="error">{this.state.value}</Alert>}
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={this.onSubmit}
                                color="primary"
                                fullWidth
                                type="button"
                                variant="contained">
                                Log in
                        </Button>
                        </Grid>
                        <p>Don't have an Account?</p>
                    </Grid>
                </form>

            </Container >

        )
    }
}

export default SignInPage