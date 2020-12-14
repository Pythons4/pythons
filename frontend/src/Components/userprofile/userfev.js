import React from 'react'
import './user.css'

// import Button from '@material-ui/core/Button';


class UserFev extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)


    }



    render() {
        var tip;

        tip = this.props.fev.tip_id;





        return (
            <div class="wrapper">
                <div class="fev_card">
                    <div class="fev_left">
                        <div class="fev_datails">
                            <h1>{tip}</h1>



                        </div>
                    </div>

                </div>
            </div>





        )
    }


}

export default UserFev
