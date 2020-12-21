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
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
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
  const [state, setState] = React.useState({
    location: "",
    houres: "",
    date: "",
    name: props.data.name,
    price: props.data.price,
  });

  const handleChange = (e: any) => {
    setState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
    console.log(state, "belalala");
  };

  let { userid }: any = store.getState().UserReducer;
  const book = () => {
    if (userid) {
      let serviceData = {
        user_id: JSON.parse(userid),
        service_name: state.name,
        user_service_date: inputValue,
        user_service_hours: state.houres,
        user_service_location: state.location,
        user_service_price: state.price,
      };
      console.log(serviceData);

      axios.post("/api/userservice/", serviceData).then(function (response) {
        console.log(response);
      });
    } else {
      alert("you should login");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div id="forForm">
        <h3>{props.data.name}</h3>
        <h4>{props.data.price} / hour</h4>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            id="outlined-name"
            label="Date"
            name="date"
            minDate={moment().add(1, 'days').endOf('day')}
            value={selectedDate}
            format="YYYY-MM-DD"
            // inputValue={inputValue}
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
          onChange={handleChange}
        />
        <TextField
          id="standard-secondary"
          label="Location"
          name="location"
          onChange={handleChange}
        />
        <br />
        <Button
          onClick={book}
          id="forButton"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </form >
  );
}
