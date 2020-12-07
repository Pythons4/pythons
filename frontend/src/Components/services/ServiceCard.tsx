import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ServicesCard extends Component {
    render() {
        return (
            <div>
                {/* <div class="row text-center"> */}

                <div className="col-md-6 mb-4">
                    <img className="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                        data-holder-rendered="true" />
                    <h2 className="my-5 h2">Basic example</h2>
                    <h2 className="my-5 h2">Basic example</h2>

                </div>

                {/* </div> */}

            </div >

        )
    }
}
