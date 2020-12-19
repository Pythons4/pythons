//tip page
import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Tip.css";
import store from "../../store";
import configdata from "../../csrftoken";
import axios from "axios";
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
      };
    };
  };
}
//tip type
interface Tip0 {
  tip_title: string;
  tip_img: string;
  tip_text: string;
  _id: string;
}
interface State {
  text: string;
  tip: any;
  commints: Array<string>;
  favorite: any;
  isFavorite: boolean;
  // isLoaded: boolean;
}
let thetip: Tip0;
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
      // isLoaded: false,
    };
    this.handelcliking = this.handelcliking.bind(this);
    this.handeltext = this.handeltext.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    var tip_id = this.state.tip._id;
    var { userinfo }: any = store.getState().UserReducer;
    var user_id = JSON.parse(userinfo)._id;
    //retrive the commints 4 the tip
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
          },
          configdata
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    if (this.state.isFavorite === false) {
      axios
        .post(`/api/favorites/`, {
          user_id: user_id,
          tip_id: this.state.tip._id,
          tip_img: this.state.tip.tip_img,
          tip_title: this.state.tip.tip_title,
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
  }

  render() {
    return (
      //the tip
      <div>
        <div
          className="d-flex flex-wrap justify-content-around catdiv"
          style={{ marginBottom: "50px", marginTop: "18px" }}
        >
          <p>{this.state.tip.tip_title} </p>
          <img
            src={this.state.tip.tip_img}
            style={{ cursor: "pointer" }}
            alt="tippage"
            className="imgstyle"
          ></img>
          <p>{this.state.tip.tip_text} </p>
        </div>
        <div>
          <form>
            <input
              type="text"
              name="comments"
              onChange={this.handeltext}
            ></input>
            <button type="button" onClick={this.handelcliking}>
              post
            </button>
          </form>
          {/* { if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return( */}
          <div
            className="d-flex flex-wrap justify-content-around catdiv"
            style={{ marginBottom: "50px", marginTop: "18px" }}
          >
            {/* tip commints  */}
            {this.state.commints &&
              this.state.commints.map((element: any, i: number) => (
                <div key={i} style={{ textAlign: "center", marginTop: "45px" }}>
                  <p>{element.user_name} </p>
                  <p>{element.commint_text} </p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <Button onClick={this.favorite}>
            {this.state.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </div>
      </div>
    );
  }
}
