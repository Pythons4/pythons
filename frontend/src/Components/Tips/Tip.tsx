//tip page
import React, { Component } from "react";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from '@material-ui/icons/Chat';
import { Paper } from "@material-ui/core";
import store from "../../store";
import configdata from "../../csrftoken";
import axios from "axios";
import "./Tip.css";

interface Props {
  title: string;
  imge: string;
  text: string;
  location: {
    state: {
      tip: {
        tip_title: string;
        tip_img: string;
        tip_text: string;
        _id: string;
        tip_date: any
      };
    };
  };
}
// //tip type
// interface Tip0 {
//   tip_title: string;
//   tip_img: string;
//   tip_text: string;
//   _id: string;
//   tip_date: any
// }
interface State {
  text: string;
  tip: any;
  commints: Array<string>;
  favorite: any;
  isFavorite: boolean;
  tipdesc: string,
  tipuser: string
}
//tip class
export default class Tip extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      tip: this.props.location.state.tip,
      text: "",
      commints: [],
      favorite: [],
      isFavorite: false,
      tipuser: '',
      tipdesc: ''
    };
    this.handelcliking = this.handelcliking.bind(this);
    this.handeltext = this.handeltext.bind(this);
    this.favorite = this.favorite.bind(this);
    console.log(props);
  }

  componentDidMount() {
    var tip_id = this.state.tip._id;
    axios.post('/api/getbyid', { tip_id: tip_id }, configdata)
      .then((res: any) => {
        this.setState({
          // tipuser: res.data.user_name,
          // tipdesc: res.data.tip_text
          tip: res.data
        })
      })
    var { userinfo }: any = store.getState().UserReducer;
    if (userinfo) {
      var user_id = JSON.parse(userinfo)._id;
      //retrive the commints 4 the tip

      axios.get(`/api/favorites/${user_id}/`).then((res) => {
        res.data.map((element: any, i: number) => {
          if (element.tip_id === this.state.tip._id) {
            this.state.favorite.push(res.data[i]);
            console.log(this.state.favorite);
            this.setState({
              isFavorite: true,
            });
          }
        });
      });
    }
    axios
      .get(`/api/tipcomments/${tip_id}/`)
      .then((res) => {
        this.setState({
          commints: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handelcliking() {
    var { userinfo }: any = store.getState().UserReducer;
    if (JSON.parse(userinfo).user_name) {
      //posting the commints
      axios
        .post(
          "/api/tipcomments/",
          {
            commint_text: this.state.text,
            user_name: JSON.parse(userinfo).user_name,
            tip_id: this.state.tip._id,
            user_img: JSON.parse(userinfo).user_img,
          },
          configdata
        )
        .then((res) => {
          console.log(res.data);
          this.componentDidMount()
          var x = (document.getElementById("cpmmentinput") as HTMLTextAreaElement);
          if (x) {
            x.value = ''
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else return <p>please make sure you are logged in first</p>;
    console.log(this.state.favorite);
  }
  handeltext(e: any) {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  favorite() {
    var { userinfo }: any = store.getState().UserReducer;
    var user_id = JSON.parse(userinfo)._id;
    if (JSON.parse(userinfo)._id !== null) {
      if (this.state.isFavorite === false) {
        // console.log(this.stat);
        axios
          .post(`/api/favorites/`, {
            user_id: user_id,
            tip_id: this.state.tip._id,
            tip_img: this.state.tip.tip_img,
            tip_title: this.state.tip.tip_title,
            user_name: this.state.tip.user_name,
          })
          .then((res) => {
            this.setState({
              isFavorite: true,
            });
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (this.state.isFavorite === true) {
        var _id = this.state.favorite[0]["_id"];
        console.log(_id);
        axios
          .post(`/api/updatefavorite`, { _id: _id }, configdata)
          .then((res) => {
            console.log(res);
            this.setState({
              isFavorite: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      return <p>please make sure you are logged in first</p>;
    }
  }

  render() {
    var { userid } = store.getState().UserReducer
    return (
      <div> { this.state.tip.user_name && (<div className='shadowtip' style={{ borderRadius: '5px', paddingTop: '20px', width: '100%', textAlign: 'center' }}>
        <div className='d-flex flex-column' style={{ borderRadius: '5px', paddingTop: 'auto', width: '80%', marginLeft: 'auto', marginRight: '10%' }}>
          {/* Tip Information (title, img ,description ,time ,fav and commint) */}
          <div className='d-flex flex-column '
            style={{ marginBottom: "50px", marginTop: "18px" }} >
            <p className='titlestyle'>{this.state.tip.tip_title} </p>
            <p className='thefont'>written by: {this.state.tip.user_name || this.state.tipuser} </p>
            <img className='tipimgstyle' src={this.state.tip.tip_img} style={{ cursor: "pointer" }} alt="tippage" ></img>
            <p className='tipdescription'>{this.state.tip.tip_text || this.state.tipdesc} </p>
            <div className='d-flex justify-content-between favdatestyle'>
              <div>
                {/* add the tip to favorite or remove it */}
                <Button onClick={this.favorite} style={{ outline: 'none', color: '#C70039', width: '20px', fontSize: '12px' }}>
                  {this.state.isFavorite ? <FavoriteIcon style={{ fontSize: 26 }} /> : <FavoriteBorderIcon style={{ fontSize: 26 }} />}
                50
                </Button>

                <Button disabled style={{ outline: 'none', color: 'black', width: '20px', fontSize: '12px' }}>
                  <ChatIcon style={{ fontSize: 26 }}></ChatIcon> 18
                </Button>

                <TimeAgo style={{ marginTop: '10px', marginRight: '8px', marginLeft: '4px' }} date={this.state.tip.tip_date} />
              </div>
            </div>
            <div className='thelinestyle'></div>

            {/* the tip commints*/}
            <table className="table favdatestyle">
              <thead className="thead-light">
                <tr>
                  {userid && <Paper style={{ height: '40px', marginBottom: '18px' }}>
                    <input className='inputfield' id='cpmmentinput' type="text" name="comments" placeholder='Add a comment...' onChange={this.handeltext}></input>
                    <button type="button" className='postbtn' onClick={this.handelcliking}>Post</button>
                  </Paper>}
                </tr>
              </thead>

              {/* <div className="d-flex justify-content-around " > */}
              <tbody>
                {this.state.commints &&
                  this.state.commints.slice(0).reverse().map((element: any, i: number) => (
                    <tr key={i} style={{ textAlign: 'left', borderBottom: '0.5px solid rgb(126, 102, 110)' }}>
                      <div className='d-flex'  >
                        <img className='userimg' src={element.user_img} alt='userimg'></img>
                        <div className='d-flex flex-column'>
                          <p style={{ marginLeft: '8px', marginTop: '12px' }}>{element.user_name} <TimeAgo date={element.commint_date} style={{ fontSize: '9px' }} ></TimeAgo>
                          </p>
                        </div>
                      </div>
                      <p style={{ marginLeft: '40px' }}>{element.commint_text} </p>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div >)}
      </div>
    );
  }
}
