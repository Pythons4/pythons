import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './server.css'
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
interface data {
    data: {
        name: string,
        price: string
    }
}

export default function StateTextFields(props: data) {
    const classes = useStyles();
    const [state, setState] = React.useState({ location: "", houres: "", date: "" });
    const handleChange = (e: any) => {
        setState(currentState => ({
            ...currentState,
            [e.target.name]: e.target.value
        })

        )
        console.log(props, "belalala")
    }

        ;
    return (
        <form className={classes.root} noValidate autoComplete="off">

            <div id="forForm">
                <br /><br /><br />
                <h3>Sterilization</h3>
                <h4>2 hr / 300 $</h4>

                <TextField
                    id="outlined-name"
                    label="Date"
                    // value="mm/dd/yy"
                    name="date"
                    onChange={handleChange}
                    // {(e) => {
                    //     setState(currentState => ({
                    //         ...currentState,
                    //         date: e.target.value


                    //     })

                    //     )
                    // }}

                    variant="outlined"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Hours"
                    // value="11:00am 1:00 pm"
                    name="houres"
                    onChange={handleChange}

                    variant="outlined"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Location"
                    // value="Some Where"
                    name="location"
                    onChange={handleChange}

                    variant="outlined"
                /><br /><br />

                <Button id="forButton" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
}