import React, { Component } from 'react'
import axios from "axios";
import configdata from '../../csrftoken'
import store from '../../store';


var postreq = async (file1, tip_text, tip_title) => {
    const data = new FormData()
    data.append('file', file1[0])
    data.append('upload_preset', 'appimgs')

    axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
        .then(res => {
            console.log(res.data.secure_url)
            axios.post("/api/tips/", {
                tip_title: tip_title, tip_text: tip_text, tip_img: res.data.secure_url, user_id: '123456789hfgshjkjg'
            }, configdata)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

export default class AddTip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviwesoursw: '',
            takethis: '',
            file: '',
            tip_title: '',
            tip_text: ''
        }
        this.handelimguplode = this.handelimguplode.bind(this)
        this.handelclikckimg = this.handelclikckimg.bind(this)
        this.handeltext = this.handeltext.bind(this)

    }
    handelimguplode(e) {
        const file = e.target.files
        this.previwefile(file)
        console.log(file.name)
        this.setState({
            takethis: file.name,
            file: file,
        })

    }
    previwefile(file) {
        const reader = new FileReader()
        reader.readAsDataURL(file[0])
        reader.onloadend = () => {
            this.setState({
                reviwesoursw: reader.result
            })
        }
    }
    handeltext(e) {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handelclikckimg() {
        console.log(this.state.takethis)
        postreq(this.state.file, this.state.tip_text, this.state.tip_title)

    }
    render() {
        console.log(store.getState().UserReducer.userid)
        return (
            <div>
                <form>
                    <input type='text' name='tip_text' onChange={this.handeltext}></input>
                    <input type='text' name='tip_title' onChange={this.handeltext}></input>
                    <input type='file' name='img' onChange={this.handelimguplode}></input>
                    <button type='button' onClick={this.handelclikckimg}></button>
                </form>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {this.state.reviwesoursw && (<img src={this.state.reviwesoursw}></img>)}
            </div>
        )
    }
}   