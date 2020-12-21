import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {
    price: string,
    imge: string,
    name: string
}
export default class ServicesCard extends Component<Props> {

    render() {
        console.log(this.props)
        return (
            <div>
                {/* <div class="row text-center"> */}

                <div className="">
                    <img className="rounded-circle" alt="100x100" src={this.props.imge}
                        data-holder-rendered="true" />
                    <h2 className="my-5 h2">{this.props.name}</h2>
                    <h2 className="my-5 h2">{this.props.price}</h2>

                </div>

                {/* </div> */}

            </div >

        )
    }
}
