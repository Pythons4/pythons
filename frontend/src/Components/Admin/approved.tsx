import axios from 'axios'
import React, { Component } from 'react'
import config from '../../csrftoken'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import { approveService } from '../../store/actions/approveAction'

interface State {
    services: any
}

interface Props {
    services: any;
}

export default class AdimApproveServices extends Component<State, Props> {
    constructor(props: Props | Readonly<State>) {
        super(props)
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        axios.get('/api/userservice/', config)
            .then(res => {
                console.log(res.data)
                this.setState({
                    services: res.data
                })
            })
            .catch(err => console.log(err.message))
    }
    render() {

        return (
            <div>
                { this.state.services && this.state.services.map((element: any, i: number) =>
                    <div key={i}>
                        <h4>{element.user_service_date}</h4>
                        <p>{element.user_service_location}</p>
                        <FormControlLabel
                            control={<Checkbox checked={element.user_service_approv} onChange={() => {
                                console.log('clicked')
                                var value = 1
                                if (element.user_service_approv)
                                    value = 0
                                approveService(element._id, value)
                                this.componentDidMount()
                            }
                            } name="checkedG" />}
                            label="provve this booked service"
                        />

                    </div>)}

            </div>
        )
    }
}
