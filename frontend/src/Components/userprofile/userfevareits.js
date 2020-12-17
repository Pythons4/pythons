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
        axios.get(`/api/favorites/${id}/`).then((res) => {
            this.setState({
                UserFevareits: res.data
            })

        })
        console.log(this.state.UserFevareits)
    }


    render() {
        console.log(this.state.UserFevareits)

        return (
            <div div className="profile-body">
                <div className="profile-fevareits tap">
                    {
                        this.state.UserFevareits.length !== 0 ?
                            this.state.UserFevareits.map((fev, id) => {

                                return <div class="wrapper" key={id}>
                                    <div class="fev_card">
                                        <div class="fev_left">
                                            <div class="fev_datails" >
                                                {console.log(fev.tip_title)}
                                                <p>{fev.tip_title}</p>
                                                <img style={{ width: '300px' }}
                                                    src={fev.tip_img}
                                                    alt="tipimage"
                                                />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            })
                            : <div className='user__fev'><h3>No Fevareits</h3></div>
                    }
                </div>
            </div>
        )
    }


}

export default UserFevareits