import React, { Component } from 'react';
import ServicesCard from "./ServiceCard"
import setService from "../../store/actions/servicesAction"
import { connect } from "react-redux"
import Popup from './popupinfoedit'

class Services extends Component<{ services: any, setService: any }> {
    // to send data to the form to know which servid
    state = {
        data: {
            name: "choose service",
            price: ""
        }
        ,
        isShow: false

    }

    // to edit the state with clicked service info
    onclick = (data: any) => {
        this.setState({
            data,
        })
        this.setState({

            isShow: !this.state.isShow
        })
        return data
    }

    render() {
        var price: any, imge: any, name: any;
        var check = true
        let ser: any = this.props.services.map(((serv: any) => {
            price = serv.service_price;
            imge = serv.service_img;
            name = serv.service_name;
            check = false
            return < ServicesCard price={price} imge={imge} name={name} onclick={this.onclick} />

        }))

        return (
            <div className="d-flex justify-content-around" style={{ marginTop: '40px', paddingBottom: '20px' }}>
                <div className="d-flex row" >
                    {check ? <img alt='serviceimg' src='https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif' style={{ width: '230px' }}></img> : ser}
                </div >

                {(this.state.isShow && true) && (
                    <Popup
                        data={this.state.data}
                        handleClose={this.onclick}
                    />
                )}
            </div >
        )
    }
}



function mapStateToProps(state: any) {
    return {
        services: state.services.services
    }
}

export default connect(mapStateToProps, setService)(Services)