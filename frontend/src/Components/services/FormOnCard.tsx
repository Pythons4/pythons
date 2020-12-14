import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './server.css'
import axios from 'axios';
import store from "../../store"
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

    let { userid } = store.getState().UserReducer
    let serviceData = {
        user_id: JSON.parse(userid),
        service_name: state.name,
        user_service_date: state.date,
        user_service_hours: state.houres,
        user_service_location: state.location
    }
    // user_id = models.TextField()
    // service_name = models.TextField()
    // user_service_location = models.TextField()
    // user_service_date = models.DateField()
    // user_service_hours = models.IntegerField()


    const book = () => {
        console.log(serviceData)
        if (userid) {
            axios.post('/api/userservice/', serviceData)
                .then(function (response) {
                    console.log(response);
                })
        } else {

            alert("you should login")
        }


        // axios.post('/api/userservice/', {


        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
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
                    // label="Date"
                    type="date"
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
                    type="number"
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