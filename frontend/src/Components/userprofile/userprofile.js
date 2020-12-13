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
               <UserTips/>
               <UserServeces/>
               <UserFevarets/>
                    
                        
            </div>    






            



        )
    }


}

export default UserProfile
