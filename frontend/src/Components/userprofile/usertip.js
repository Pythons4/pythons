import React from 'react'
import './user.css'

// import Button from '@material-ui/core/Button';


class UserTip extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)


    }



    render() {
        var title, text, image;
        title = this.props.tip.tip_title;
        text = this.props.tip.tip_text;
        image = this.props.tip.tip_img;




        return (
            <div class="wrapper">
                <div class="main_card">
                    <div class="card_left">
                        <div class="card_datails">
                            <h1>{title}</h1>

                            <p class="disc">{text}</p>

                        </div>
                    </div>
                    <div class="card_right">
                        <div class="img_container">
                            <img src={image} alt="" />
                        </div>


                    </div>
                </div>
            </div>





        )
    }


}

export default UserTip
