import React, { Component } from "react"
import UserTips from './usertips'
import UserServeces from './userserveces'
import UserFevarets from './userfevareits'
// import setUser from "../../store/actions/profileaction"
// import { connect } from "react-redux"

class UserProfile extends React.Component {
    constructor(props) {

        super(props)


    }



    render() {



        return (


            <div >
                <div >    <UserTips />
                </div>

                <div > <UserServeces /></div>

                <div > <UserFevarets /></div>




            </div>










        )
    }


}

export default UserProfile
