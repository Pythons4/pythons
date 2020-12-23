import axios from 'axios'
import React, { Component } from 'react'
import config from '../../csrftoken'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import { approveService } from '../../store/actions/approveAction'
import './adminprofile.css';

interface State {
    services: any,

}

interface Props {
    services: any;

}

export default class ServecesNApproved extends Component<State, Props> {
    constructor(props: Props | Readonly<State>) {
        super(props)
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        axios.get('/api/userservice/', config)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    services: res.data.filter((service: { user_service_approv: any; }) => !service.user_service_approv)
                })
            })
            .catch(err => console.log(err.message))
    }
    render() {
        var x = true
        return (
            <div>
                <div className="d-flex row align-items-center ">
                    <div className=" d-flex row  col-12 ">

                        {this.state.services && this.state.services.map((element: any, i: number) =>
                            <div className="admin_card" key={i}>
                                <div className="ser_datails">
                                    <h4>Date:{element.user_service_date}</h4>
                                    <p>Location: {element.user_service_location}</p>
                                    <p >Acceptable<Checkbox
                                        classes={{ root: 'custom-checkbox-root' }}
                                        defaultChecked={element.user_service_approv}
                                        onChange={(e) => {
                                            console.log('hii')
                                            approveService(element._id, e.target.checked)
                                            this.componentDidMount()
                                        }}
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    /> </p>
                                </div>



                            </div>)}
                    </div>
                </div>

            </div>
        )
    }
}
