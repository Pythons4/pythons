import React from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import store from '../store';
import { signin } from '../store/actions/userActions';
import { Link } from 'react-router-dom'
import './signpage.css'

class SignInPage extends React.Component<{}, { value: string; alert: boolean; useremail: string; userpass: string }>{
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

    //user sign in function
    onSubmit() {
        store.dispatch(signin({ user_email: this.state.useremail, user_password: this.state.userpass }))
        setTimeout(() => {
            //check if the email is wrong
            if (store.getState().UserReducer.error === "wrong email") {
                this.setState({
                    value: 'wrong Email',
                    alert: true
                })
            }
            //check if the password is wrong
            else if (store.getState().UserReducer.error === "wrong password") {
                this.setState({
                    value: 'Wrong Password',
                    alert: true
                })
            }
            //check if any error accoure
            else if (store.getState().UserReducer.error === "Somthing Wrong Happened") {
                this.setState({
                    value: 'Somthing Wrong Happened',
                    alert: true
                })
            }

        }, 2500);
    };

    render() {
        return (
            <div className="d-flex justify-content-center shadow" style={{ borderRadius: '5px', paddingTop: '20px', width: '60vw', marginLeft: 'auto', marginRight: 'auto' }}>

                <div className="backimg2">

                </div>

                <Container maxWidth="xs" style={{ marginRight: '0', marginLeft: '0', marginTop: '60px' }}>
                    <h3 className='incenter h3font '>Welcome Back!</h3>
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

                                {this.state.alert && <>
                                    <br></br>
                                    <Alert severity="error">{this.state.value}</Alert></>}
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    onClick={this.onSubmit}
                                    color="primary"
                                    fullWidth
                                    type="button"
                                    variant="contained">
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    <p style={{ marginTop: '6px' }}>New Here? <Link style={{ color: '#3F51B5' }} to={{ pathname: 'signup' }}>Signup</Link></p>
                </Container >
            </div>
        )
    }
}

export default SignInPage