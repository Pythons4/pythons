import React from 'react'
import axios from 'axios';
import UserFev from './userfev'
import store from "../../store"
import './user.css'




class UserFevareits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserFevareits: []
        }

    }


    componentDidMount() {
        var { userid } = store.getState().UserReducer

        var id = JSON.parse(userid)
        axios.get(`api/favorites/${id}`)
            .then(res => {

                console.log(res.data);

                this.setState({ UserFevareits: res.data })

            })

            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state.UserFevareits)

        return (
            <div div className="profile-body">
                <div className="profile-fevareits tap">
                    {
                        this.state.UserFevareits.length !== 0 ?
                            this.state.UserFevareits.map((fev, id) => {
                                return <UserFev fev={fev} key={id} />

                            })
                            : <div className='user__fev'><h3>No Fevareits</h3></div>
                    }
                </div>
            </div>
        )
    }


}

export default UserFevareits