import { validateEmail, validatePassword } from "./validation";
import { signup } from "../store/actions/userActions";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import store from "../store";
import React from "react";
import "./signpage.css";

class SignInPage extends React.Component<{}, {
  value: string;
  alert: boolean;
  useremail: string;
  userpass: string;
  username: string;
  userphone: string;
}>{
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      value: "",
      useremail: "",
      userpass: "",
      username: "",
      userphone: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data: any) {
    console.log(data);
    //check email validation
    if (validateEmail(this.state.useremail))
      if (this.state.username === "" || this.state.userphone === "") {
        //check if there is any empty fields
        this.setState({
          value: "Some Field still empty!!",
          alert: true,
        });
      }
      //check password validation (more than 8 digit and contain small and capital letters)
      else if (!validatePassword(this.state.userpass)) {
        this.setState({
          value:
            "Password should contain capital and small letters and numbers and should be more than 8 digits",
          alert: true,
        });
      }
      //if all feild are valid send post request to sign up the user
      else {
        store.dispatch(
          signup({
            user_name: this.state.username,
            user_password: this.state.userpass,
            user_email: this.state.useremail,
            user_phon: this.state.userphone,
          })
        );
        this.setState({
          alert: false,
        });
        setTimeout(() => {
          //send alert if there is user already sign in with the same email
          if (store.getState().UserReducer.error === "already existed user") {
            console.log("hii");
            this.setState({
              value: "already existed user",
              alert: true,
            });
          }
        }, 2300);
      }
    //send alert when the email is invalid
    else {
      this.setState({
        value: "invalid Email",
        alert: true,
      });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center shadow"
        style={{
          borderRadius: "5px", paddingTop: "20px", width: '60vw',
          marginLeft: "auto", marginRight: "auto", marginBottom: "30px",
        }}>

        <div className="backimg2"></div>

        {/* Signup form */}
        <Container
          maxWidth="xs"
          style={{ marginRight: "0", marginLeft: "0", marginTop: "35px" }}
        >
          <h3 className="incenter h3font ">Create New Account!</h3>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="User Name"
                      name="email"
                      size="small"
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      size="small"
                      onChange={(e) =>
                        this.setState({ useremail: e.target.value })
                      }
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="User Phone Number"
                      name="phone"
                      size="small"
                      onChange={(e) =>
                        this.setState({ userphone: e.target.value })
                      }
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      onChange={(e) =>
                        this.setState({ userpass: e.target.value })
                      }
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                {this.state.alert && (
                  <>
                    <br></br>
                    <Alert severity="error">{this.state.value}</Alert>
                  </>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={this.onSubmit}
                  color="primary"
                  fullWidth
                  type="button"
                  variant="contained">Sgin Up</Button>
              </Grid>
            </Grid>
          </form>
          <p style={{ marginTop: "6px" }}>
            Already Have an Account?{" "}
            <Link style={{ color: "#3F51B5" }} to={{ pathname: "signin" }}>
              Signin
            </Link>
          </p>
        </Container>
      </div>
    );
  }
}

export default SignInPage;