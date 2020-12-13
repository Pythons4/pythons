import React from 'react'
import './user.css'

// import Button from '@material-ui/core/Button';


class UserCard extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)


    }



    render() {
        var name, date, hours, location;
        name = this.props.ser.service_name;
        date = this.props.ser.user_service_date;
        hours = this.props.ser.user_service_hours;
        location = this.props.ser.user_service_location;



        return (


            <div class="wrapper">
                <div class="ser_card">
                    
                        <div class="ser_datails">
                            <h1>{name}</h1>

                            <p class="disc">Detailes</p>
                            <ul>
                                <li>Date : {date}</li>
                                <li>Duration :{hours} Hours</li>
                                <li>Location :{location} </li>

                            </ul>

                        </div>
                    
                </div>
            </div>    






            



        )
    }


}

export default UserCard
