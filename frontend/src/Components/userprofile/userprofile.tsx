import React, { Component } from "react"
import setUser from "../../store/actions/profileaction"
import { connect } from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';

// interface Props {
//     id: number
//     name: string,
//     email: string,
//     phone: number,
//     img: string,
//     bio: string,
//     post: [],
//     fav: []
// }


class UserProfile extends Component<{ user: any, NEW_CONTACT: any }> {
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <h1>Welcom from profile user</h1>

            </div >

        )
    }
}
function mapStateToProps(state: any) {
    return {
        profile: state.profile
    }
}


export default connect(mapStateToProps, setUser)(UserProfile)
