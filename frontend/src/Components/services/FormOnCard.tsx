import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './server.css'
import axios from 'axios';
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
    const [state, setState] = React.useState({ location: "", houres: "", date: "", name: props.data.name, price: props.data.price });

    const handleChange = (e: any) => {
        setState(currentState => ({
            ...currentState,
            [e.target.name]: e.target.value
        })

        )
        console.log(state, "belalala")
    }

    const book = (e: React.FormEvent<EventTarget>) => {
        // e.preventdefault();
        // axios.post('/api/userservice/', state)
        //     .then(function (response) {
        //         console.log(response);
        //     })

        axios.post('/api/userservice/', {


        })
            .then(function (response) {
                console.log(response);
            })
    }


        ;
    return (
        <form className={classes.root} noValidate autoComplete="off">

            <div id="forForm">
                <br /><br /><br />

                <h3>{props.data.name}</h3>
                <h4>{props.data.price}</h4>

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

                <Button onClick={book} id="forButton" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
}