import React from 'react'
import axios from 'axios';
import UserFev from './userfev'
import './user.css'




class UserFevarets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UserFevarets: []
        }
        
    }


    componentDidMount() {
        axios.get('/api/favorites/')
            .then(res => {

                console.log(res);

                this.setState({ UserFevarets: res})

            })

            .catch((error) => {
                console.log(error);
            })
    }

    
    render() {
        console.log(this.state.UserFevarets)

        return (
            <div>
                <h1 className='user__fev'>Fevarets</h1>
                {
                    this.state.UserFevarets.length !== 0 ?
                        this.state.UserFevarets.map((fev, id) => {
                            return <UserFev fev={fev} key={id} />

                        })
                        : <div className='user__fev'><h3>No Fevarets</h3></div>
                }
            </div>
        )
    }


}

export default UserFevarets