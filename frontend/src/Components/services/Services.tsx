import React, { Component } from 'react';
import axios from "axios"
import ServicesCard from "./ServiceCard"
import setService from "../../store/actions/servicesAction"
import { connect, useDispatch, useSelector } from "react-redux"
// import 'bootstrap/dist/css/bootstrap.min.css';
import FormOnCard from "./FormOnCard"

class Services extends Component<{ services: any, setService: any }> {
    state = {
        data: {
            name: "choose service",
            price: ""
        }
        ,
        isShow: false

    }
    componentDidMount() {
        // this.props.setService()

        // axios.get('/api/services/')
        //     .then((response) => {
        //         console.log(response.data)
        //         this.setState({ data: response.data })

        //     })
    }

    onclick = (data: any) => {
        this.setState({
            data,
        })
        if (this.state.isShow === false) {
            this.setState({

                isShow: !this.state.isShow
            })
        }
        console.log(data)
        return data
    }

    render() {

        var price: any, imge: any, name: any;
        let ser: any = this.props.services.map(((serv: any) => {
            price = serv.service_price;
            imge = serv.service_img;
            name = serv.service_name;
            return < ServicesCard price={price} imge={imge} name={name} onclick={this.onclick} />
        }))

        let card = < FormOnCard data={this.state.data} />

        // console.log(ser, "props")

        return (
            <div className="d-flex row justify-content-between " >
                <div className="d-flex row  col-8 " >
                    {ser}
                </div >

                <div className="col-4 ">

                    {this.state.isShow && card}

                </div>

                {/* {this.props.services} */}
                {/* < ServicesCard price={price} imge={imge} name={name} /> */}

            </div >
        )
    }
}



function mapStateToProps(state: any) {
    return {
        services: state.services.services
    }
}

// function mapDispatchToProps(dispatch: any) {
//     return {
//         getServices: () => async dispatch({ type: "SET_SERVICES" })

//     }
// }



export default connect(mapStateToProps, setService)(Services)
// export default Services