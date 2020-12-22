import React from "react";
import '../userprofile/profilestyle.css'
import BookForm from './FormOnCard'
import "./server.css";


interface Props {
    data: any
    handleClose: any,
}

class Popup extends React.Component<Props> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: Props | Readonly<Props>) {
        super(props)
    }

    render() {
        return (
            <div className="popup-box " >
                <div className="box formShadow" style={{ width: '460px', marginTop: 'calc(100vh - 80vh)' }}>
                    <span className="close-icon" onClick={this.props.handleClose} style={{ marginTop: 'calc(100vh - 90vh)' }}>x</span>
                    <BookForm data={this.props.data}></BookForm>
                </div>
            </div>
        );
    }
};

export default Popup;