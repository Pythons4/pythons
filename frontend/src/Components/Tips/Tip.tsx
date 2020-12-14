//tip page
import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
}
let thetip: Tip0;
export default class Tip extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      tip: this.props.location.state.tip,
      text: "",
      commints: [],
    };
    this.handelcliking = this.handelcliking.bind(this);
    this.handeltext = this.handeltext.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/tipcomments/")
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
    axios
      .post(
        "/api/tipcomments/",
        {
          commint_text: this.state.text,
          user_name: "5fd5fee9303c97facb7db817",
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
  handeltext(e: any) {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    console.log(this.props.location.state.tip);
    console.log(this.state.tip);

    // thetip = this.props.location.state.thetip;
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
      </div>
    );
  }
}
