import React from 'react'
import axios from 'axios';
import UserTip from './usertip'
// import './user.css'
// import store from "../../store"



class UserTips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserTips: []
        }
        // console.log(props)
    }


    componentDidMount() {
        axios.get('api/tips/')
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
            <div>
                <h1 className='user__tip'>Posts</h1>
                {
                    this.state.UserTips.length !== 0 ?
                        this.state.UserTips.map((tip, id) => {
                            return <UserTip tip={tip} key={id} />

                        })
                        : <div className='user__tip'><h3>No Posts</h3></div>
                }
            </div>
        )
    }


}

export default UserTips