import React from 'react'
import axios from 'axios';
import UserCard from './usercard'
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

                this.setState({ UserService: res.data })

            })

            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state.UserService)

        return (
            <div className="profile-body">
                <div className="profile-services tap">
                    {
                        this.state.UserService.length !== 0 ?
                            this.state.UserService.map((ser, id) => {
                                return <UserCard ser={ser} key={id} />

                            })
                            : <div className='user__ser'><h3>No Services</h3></div>
                    }
                </div>
            </div>
        )
    }


}

export default UserServeces