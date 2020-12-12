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
            <div className='ser__card'>

                <div className='car__info'>

                    <div className='card__info1'>

                        <h2 className="card__name">{name}</h2>

                        <div className="card__date">
                            <h3>Date : {date}</h3>
                        </div>


                        <div className='card__hour'>

                            <h3>Duration :{hours} Hours</h3>
                        </div>

                        <div className='card__location'>
                            <h3>Location :{location} </h3>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


}

export default UserCard
