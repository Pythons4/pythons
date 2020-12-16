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
        favorite: string;
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
export default class Tip extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      tip: this.props.location.state.tip,
      text: "",
      commints: [],
      favorite: JSON.parse(this.props.location.state.tip.favorite),
      isFavorite: false,
      // isLoaded: false,
    };
    this.handelcliking = this.handelcliking.bind(this);
    this.handeltext = this.handeltext.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    var tip_id = this.state.tip._id;
    console.log(tip_id);
    axios
      .get(`/api/tipcomments/${tip_id}/`)
      .then((res) => {
        this.setState({
          commints: res.data,
        });
        console.log(this.state.commints);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handelcliking() {
    var { userinfo }: any = store.getState().UserReducer;
    if (JSON.parse(userinfo).user_name) {
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
    console.log(userinfo);
    this.state.favorite &&
      this.state.favorite.map((element: any, i: number) => {
        if (element === user_id) {
          this.setState({
            isFavorite: true,
          });
        } else {
          this.setState({
            isFavorite: false,
          });
        }
      });
    if (this.state.isFavorite === true) {
      for (var i = 0; i < this.state.favorite.length; i++) {
        if (this.state.favorite[i] === user_id) {
          this.state.favorite.splice(i, 1);
        }
      }
      axios
        .put("/api/favorite", {
          favorite: JSON.stringify(this.state.favorite),
          tip_id: this.state.tip._id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({
        isFavorite: false,
      });
    }
    if (this.state.isFavorite === false) {
      this.state.favorite.push(user_id);
      axios
        .put("/api/favorite", {
          favorite: JSON.stringify(this.state.favorite),
          tip_id: this.state.tip._id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({
        isFavorite: true,
      });
    }
  }

  render() {
    return (
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
