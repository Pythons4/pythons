import React from 'react'
import axios from 'axios';
import UserTip from './usertip'
import store from "../../store"
import './user.css'




class UserTips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserTips: []
        }
        // console.log(props)
    }


    componentDidMount() {
        var { userid } = store.getState().UserReducer

        var id = JSON.parse(userid)

        axios.get(`api/tips/${id}`)
            .then(res => {

                console.log(res.data);

                this.setState({ UserTips: res.data })

            })

            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state.UserTips)

        return (
            <div className="profile-body">
                <div className="profile-posts tap">
                    {
                        this.state.UserTips.length !== 0 ?
                            this.state.UserTips.map((tip, id) => {
                                return <UserTip tip={tip} key={id} />

                            })
                            : <div className='user__tip'><h3>No Posts</h3></div>
                    }

                </div>


            </div>
        )
    }


}

export default UserTips