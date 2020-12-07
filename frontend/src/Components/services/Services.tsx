import React, { Component } from 'react';
import ServicesCard from "./ServiceCard"
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';

class Services extends Component {

    componentDidCatch = () => {
        // this.props.getServices
    }

    render() {
        return (
            <div>

                {/* {this.props.services} */}
            </div >

        )
    }
}

let getServices = {
    type: "GET"
}

function mapStateToProps(state: any) {
    return {
        services: state.services.services
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getServices: () => dispatch(getServices)

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Services)