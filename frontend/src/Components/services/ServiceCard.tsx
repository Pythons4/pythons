import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// props to send price and name of service to form 
interface Props {
    price: string,
    imge: string,
    name: string,
    onclick: (e: any) => Object
}

export default class ServicesCard extends Component<Props> {

    render() {
        console.log(this.props)
        return (

            <div style={{ marginBottom: "28px" }} className="d-flex flex-column  col-4   align-items-center" onClick={() => this.props.onclick({ name: this.props.name, price: this.props.price })} >
                <div style={{ width: "200px", height: "200px" }}> <img id="imgCard" style={{ width: "200px", height: "200px" }} className="rounded-circle d-inline-block" alt="100x100" src={this.props.imge}
                    data-holder-rendered="true" /> </div>
                <h4 >{this.props.name}</h4>
                <h4 >{this.props.price}</h4>

            </div>




        )
    }
}
