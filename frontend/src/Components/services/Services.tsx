import React, { Component } from 'react';
import axios from "axios"
import ServicesCard from "./ServiceCard"
import setService from "../../store/actions/servicesAction"
import { connect, useDispatch, useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';

class Services extends Component<{ services: any, setService: any }> {
    // state = {
    //     data: []
    // }
    componentDidMount() {
        // this.props.setService()

        // axios.get('/api/services/')
        //     .then((response) => {
        //         console.log(response.data)
        //         this.setState({ data: response.data })

        //     })
    }

    render() {
        var price: any;
        var imge: any;
        var name: any;
        let ser: any = this.props.services.map(((serv: any) => {
            price = serv.service_price;
            imge = serv.service_img;
            name = serv.service_name;
            return < ServicesCard price={price} imge={imge} name={name} />



        }))
        // console.log(ser, "props")

        return (
            <div className="row text-center">
                {/* {this.props.services} */}
                {ser}
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