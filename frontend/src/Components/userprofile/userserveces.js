import React from 'react'
import axios from 'axios';
import store from "../../store"
import './user.css'




class UserServeces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserService: []
        }

    }


    componentDidMount() {
        var { userid } = store.getState().UserReducer

        var id = JSON.parse(userid)


        axios.get(`/api/userservice/${id} `)
            .then(res => {

                console.log(res.data);

                this.setState({
                    UserService: res.data.filter(service => service.user_service_approv)
                })

            })

            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state.UserService)



        return (
            <div className="profile-body">
                <div className="d-flex row align-items-center ">
                    <div className=" d-flex row  col-12 ">
                        {
                            this.state.UserService.length !== 0 ?
                                this.state.UserService.map((ser, id) => {

                                    return <div className="ser_card" key={id}>

                                        <div className="ser_datails">
                                            <h1>{ser.service_name}</h1>
                                            <h6>{ser.user_service_price}</h6>

                                            <p className="disc"><ul>
                                                <li>Date : {ser.user_service_date}</li>
                                                <li>Duration :{ser.user_service_hours} Hours</li>
                                                <li>Location :{ser.user_service_location} </li>

                                            </ul></p>


                                        </div>

                                    </div>



                                })
                                : <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default UserServeces