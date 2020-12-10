import React, { Component } from 'react'
import axios from "axios";
import configdata from '../../csrftoken'

var postreq = async (file1) => {
    const data = new FormData()
    data.append('file', file1[0])
    data.append('upload_preset', 'appimgs')

    axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
        .then(res => {
            console.log(res.data.secure_url)
            axios.post("/api/tips/", {
                tip_title: 'hello cleaner ', tip_text: 'make it shime', tip_img: res.data.secure_url, user_id: '0poi9'
            }, configdata)
                .then(res => {
                    console.log(res)
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

        }
        this.handelimguplode = this.handelimguplode.bind(this)
        this.handelclikckimg = this.handelclikckimg.bind(this)

    }
    handelimguplode(e) {
        const file = e.target.files
        this.previwefile(file)
        console.log(file.name)
        this.setState({
            takethis: file.name,
            file: file
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

    handelclikckimg() {
        console.log(this.state.takethis)
        postreq(this.state.file)

    }
    render() {
        console.log(configdata)
        return (
            <div>
                <form>
                    {/* add input text titel  */}
                    <input type='file' name='img' onChange={this.handelimguplode}></input>
                    <button type='button' onClick={this.handelclikckimg}></button>
                </form>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {this.state.reviwesoursw && (<img src={this.state.reviwesoursw}></img>)}
            </div>
        )
    }
}   