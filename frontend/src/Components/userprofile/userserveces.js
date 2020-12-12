import React from 'react'
import axios from 'axios';
import UserCard from './usercard'
import './user.css'
// import store from "../../store"



class UserServeces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserService: []
        }
        // console.log(props)
    }


    componentDidMount() {
        axios.get('/api/userservice/')
            .then(res => {

                console.log(res.data);

                this.setState({ UserService: res.data })

            })

            .catch((error) => {
                console.log(error);
            })
    }

    // SerList() {
    //     return this.state.UserService.map(currentser => {
    //         return <UserServeces ser={currentser} key={currentser._id} />;
    //     })

    // }


    render() {
        console.log(this.state.UserService)

        return (
            <div>
                <h1 className='user__ser'>Services</h1>
                {
                    this.state.UserService.length !== 0 ?
                        this.state.UserService.map((ser, id) => {
                            return <UserCard ser={ser} key={id} />

                        })
                        : <div className='user__ser'><h3>No Services</h3></div>
                }
            </div>
        )
    }


}

export default UserServeces