import React from "react";
import './profilestyle.css'
import store from "../../store";
import { updateuserimg } from "../../store/actions/userActions";
interface State {
    reviwesoursw: any,
    takethis: string,
    file: any,

}
interface Props {

    handleClose: any,
    userId: any

}
class Popup extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            reviwesoursw: '',
            takethis: '',
            file: '',

        }
        this.handelimguplode = this.handelimguplode.bind(this)
        this.handelclikckimg = this.handelclikckimg.bind(this)
    }
    handelimguplode(e: any) {
        const file = e.target.files
        this.previwefile(file)
        console.log(file.name)
        this.setState({
            takethis: file.name,
            file: file,
        })

    }
    previwefile(file: any) {
        const reader = new FileReader()
        reader.readAsDataURL(file[0])
        reader.onloadend = () => {
            this.setState({
                reviwesoursw: reader.result
            })
        }
    }

    handelclikckimg() {
        console.log(this.state.takethis)
        store.dispatch(updateuserimg(this.state.file, this.props.userId))

    }

    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    <input type='file' name='img' onChange={this.handelimguplode}></input>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    {this.state.reviwesoursw && (<img style={{ width: '260px' }} src={this.state.reviwesoursw}></img>)}
                    <div>
                        <button onClick={() => {
                            console.log('change image')
                            this.handelclikckimg()
                        }}>Test button</button>
                    </div>

                </div>
            </div>
        );
    }
};

export default Popup;


//uplode user image to cloudinary and user database
