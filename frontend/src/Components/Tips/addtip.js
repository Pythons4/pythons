import React, { Component } from 'react'
import axios from "axios";
import jQuery from 'jquery'

var postreq = async (file1) => {
    const data = new FormData()
    data.append('file', file1[0])
    data.append('upload_preset', 'appimgs')
    var csrftoken = getCookie('csrftoken')
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }


    axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
        .then(res => {
            console.log(res.data.secure_url)
            axios.post("/api/tips/", {
                tip_title: 'hello cleaner', tip_text: 'make it shime', tip_img: res.data.secure_url, user_id: '0poi9'
            }, config)
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    // const res = await fetch("https://api.cloudinary.com/v1_1/dve46qnma/image/upload",
    //     {
    //         method: 'GET',
    //         body: data,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         }
    //     })
    // const file = await res.json
    // console.log(file)

};

export default class AddTip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviwesoursw: '',
            takethis: '',
            file: ''
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
        return (
            <div>
                <form>
                    <input type='file' name='img' onChange={this.handelimguplode}></input>
                    <button type='button' onClick={this.handelclikckimg}></button>
                </form>
                {this.state.reviwesoursw && (<img src={this.state.reviwesoursw}></img>)}
            </div>
        )
    }
}


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}