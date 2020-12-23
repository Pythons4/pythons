import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./server.css";
import MomentUtils from "@date-io/moment";
import moment from 'moment'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

import axios from "axios";
import store from "../../store";
import { addnot } from "../../notife";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
      width: "30ch",
    },
  },
}));


// interface for props
interface data {
  data: {
    name: string;
    price: string;
  };
}

export default function StateTextFields(props: data) {

  const [selectedDate, setDate] = React.useState(moment().add(1, 'days').endOf('day'));
  const [inputValue, setInputValue] = React.useState(moment().format("YYYY-MM-DD"));
  const onDateChange = (date: any, value: any) => {
    setDate(date);
    setInputValue(value);
    console.log(inputValue)
  };

  const classes = useStyles();

  // hooks state to get data from user (form)
  const [state, setState] = React.useState({
    location: "",
    houres: "",
    date: "",
    phoneNumber: "",
    name: props.data.name,
    price: props.data.price,
  });

  //  to save data from user on state (form)
  const handleChange = (e: any) => {
    setState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));

  };

  let { userid }: any = store.getState().UserReducer;

  // send post req after book using axios
  const book = () => {

    // check if there is user login
    if (userid) {
      let serviceData = {
        user_id: JSON.parse(userid),
        service_name: state.name,
        user_service_date: inputValue,
        user_service_hours: state.houres,
        user_service_location: state.location,
        user_service_price: state.price,
        user_phone_No: state.phoneNumber
      };


      axios.post("/api/userservice/", serviceData).then((response) => {
        addnot(`${state.name} Service has been Booked`, 'default')

      });
    }

    else {
      alert("you should login");
    }
  };

  return (
    <form id="formShadow" className={classes.root} noValidate autoComplete="off" style={{ width: "430px", height: "390px" }}>
      <div id="forForm">
        <h3 style={{ color: "#337ab7" }}>{props.data.name}</h3>
        <h4 style={{ color: "#337ab7", fontSize: "22px", marginBottom: "30px" }}>  {props.data.price} / hour</h4>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            id="outlined-name"
            label="Date"
            name="date"
            minDate={moment().add(1, 'days').endOf('day')}
            value={selectedDate}
            format="YYYY-MM-DD"
            onChange={onDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}

          />
        </MuiPickersUtilsProvider>

        <TextField
          id="standard-secondary"
          label="Hours"
          type="number"
          name="houres"
          InputProps={{ inputProps: { min: 0, max: 6 } }}
          error={parseInt(state.houres) > 6}
          onChange={handleChange}

        />

        <TextField
          id="standard-secondary"
          label="number"
          type="number"
          name="phoneNumber"
          onChange={handleChange}

        />
        <TextField
          id="standard-secondary"
          label="Location"
          name="location"
          onChange={handleChange}
          style={{ color: "white" }}


        />
        <br />
        <Button
          onClick={book}
          id="forButton"
          variant="contained"
          style={{ marginTop: "26px", background: "#337ab7", color: "white" }}
        >
          Submit
        </Button>
      </div>
    </form >
  );
}
