import React from 'react'
import './user.css'

// import Button from '@material-ui/core/Button';


class UserFev extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)


    }
    render() {
        return (
            <div class="wrapper">
                <div class="fev_card">
                    <div class="fev_left">
                        <div class="fev_datails">
                            <p>{this.props.fev.tip_title}</p>
                            <img syle={{width:'20px'}}
                            src={this.props.fev.tip_img}
                            alt="tipimage"
                            />



                        </div>
                    </div>

                </div>
            </div>





        )
    }


}

export default UserFev
