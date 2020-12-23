import React from 'react'
import axios from 'axios';
import store from "../../store"
import './user.css'

import { Link } from "react-router-dom";



class UserTips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserTips: []
        }

    }


    componentDidMount() {
        var { userid } = store.getState().UserReducer

        var id = JSON.parse(userid)

        axios.get(`api/tips/${id}`).then(res => {

            this.setState({ UserTips: res.data })

        })


    }


    render() {
        console.log(this.state.UserTips)

        return (
            <div className="profile-body">
                <div className="profile-posts tap">
                    {
                        this.state.UserTips.length !== 0 ?
                            this.state.UserTips.slice(0).reverse().map((tip, id) => {

                                return <Link
                                    to={{
                                        pathname: `/tips/tip/${tip._id}`,
                                        state: { tip: tip },
                                    }}
                                >
                                    <div class="main_card" key={id}>
                                        <div class="card_left">
                                            <div class="card_datails">
                                                <h1>{tip.tip_title}</h1>
                                                <div >
                                                    <p >{tip.tip_text.slice(0, 300)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card_right">
                                            <div class="img_container">
                                                <img src={tip.tip_img} alt="tipimage" />
                                            </div>


                                        </div>
                                    </div>
                                </Link>
                            })
                            : <div ></div>
                    }

                </div>


            </div>
        )
    }


}

export default UserTips