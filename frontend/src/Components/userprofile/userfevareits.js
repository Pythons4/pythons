import React from 'react'
import axios from 'axios';
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
                <div className="d-flex row align-items-center ">
                    <div className=" d-flex row  col-12 ">
                        {
                            this.state.UserFevareits.length !== 0 ?
                                this.state.UserFevareits.map((fev, id) => {

                                    return <div class="fev_card" key={id}>

                                        <div class="fev_datails" >
                                            <img
                                                src={fev.tip_img}
                                                alt="tipimage"
                                            />

                                            <h1>{fev.tip_title}</h1>
                                            <p> By:{fev.user_name}</p>



                                        </div>
                                    </div>






                                })
                                : <div ></div>
                        }
                    </div>
                </div>
            </div>
        )
    }


}

export default UserFevareits