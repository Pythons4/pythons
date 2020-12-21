import React, { Component } from 'react'
import axios from "axios";
import configdata from '../../csrftoken'
import store from '../../store';
import './addtip.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";

var postreq = async (file1, tip_text, tip_title) => {
    var userinfo = JSON.parse(store.getState().UserReducer.userinfo);
    console.log(userinfo)
    const data = new FormData()
    data.append('file', file1[0])
    data.append('upload_preset', 'appimgs')

    axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
        .then(res => {
            console.log(res.data.secure_url)
            axios.post("/api/tips/", {
                tip_title: tip_title, tip_text: tip_text, tip_img: res.data.secure_url, user_id: userinfo._id, user_name: userinfo.user_name
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
        postreq(this.state.file, this.state.tip_text, this.state.tip_title)
        // this.setState({
        //     tip_text:'',
        //     tip_title:'',
        //     reviwesoursw:'',
        // })

    }
    render() {
        return (
            <div >
                <div className='cont'>

                
                {/* <p>hello</p> */}
             
                 {/* <img src="https://i.imgur.com/QpTKnYk.png" id='sideimg'></img> */}
             
             <div className="d-flex justify-content-center " style={{textAlign:'center',width:'35%',height:"100%",marginTop: '-20px'}}>

             <Container style={{ marginRight: '0', marginLeft: '0', marginTop: '10px',backgroundColor:'white',width:'100%',height:'100%',borderRight:'4px solid #FACD52',borderLeft:'4px solid #FACD52'}}>
                 <h3 className='incenter h3font '  style={{marginTop:'10px'}}>Share your knowledge with our community</h3>
                 <form>
                     <Grid container spacing={3}>
                         <Grid item xs={12}>
                             <Grid container spacing={2}>
                                 <Grid item xs={12}>
                                     <TextField
                                         fullWidth
                                         label="tip_text"
                                         name="tip_text"
                                         size="small"
                                         onChange={this.handeltext}
                                         variant="outlined" />
                                 </Grid>
                                 <Grid item xs={12}>
                                     <TextField
                                         fullWidth
                                         label="tip_title"
                                         name="tip_title"
                                         size="small"
                                         onChange={this.handeltext}
                                         variant="outlined" />
                                 </Grid>
                                 <Grid item xs={12}>
                                     <input type='file' name='img' onChange={this.handelimguplode}></input>
                                     {this.state.reviwesoursw && (<img src={this.state.reviwesoursw } id="cloudimg"></img>)}
                           </Grid>
                             </Grid>
                             </Grid>
                           
                         <Grid item xs={12} >
                                 <Link
                                 to={{
                                     pathname: `/tips/`
                                  }}>
                                     <Button
                                         onClick={this.handelclikckimg}
                                         id='share'
                                         fullWidth
                                         color="primary"
                                         type="button"
                                         variant="contained">
                                         Share
                             </Button>
                                 </Link>
                         </Grid>
                     </Grid>
                 </form>
             </Container >
         </div>
         </div>
         </div>
        )
    }
}   