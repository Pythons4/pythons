import React from 'react'
import axios from 'axios';
import UserFev from './userfev'
import './user.css'




class UserFevareits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserFevareits: []
        }
        
    }


    componentDidMount() {
        // let { userid } = JSON.parse(store.getState().UserReducer)
        axios.get(`api/favorites`)
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
            <div>
                <h1 className='user__ser'>Fevareits</h1>
                {
                    this.state.UserFevareits.length !== 0 ?
                        this.state.UserFevareits.map((fev, id) => {
                            return <UserFev fev={fev} key={id} />

                        })
                        : <div className='user__ser'><h3>No Fevareits</h3></div>
                }
            </div>
        )
    }


}

export default UserFevareits