//main tips page
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./TipsPage.css";
import store from "../../store";
import { GET_ALL } from "../../store/actions/getalltips";
// import Fovrite from "../Favorite/Favorite";
export class Tips extends Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tips: store.getState().tipsReducer,
    };
  }

  //get all product from database (via GET_ALL action)
  componentDidMount() {
    store.dispatch(GET_ALL());
    store.subscribe(() => {
      this.setState({
        tips: store.getState().tipsReducer,
      });
    });
  }
  render() {
    console.log(this.state.tips.tips);
    return (
      <div>
        <div className="tips_list">
          {this.state.tips.tips &&
            this.state.tips.tips.map(
              (
                element: {
                  tip_text: string;
                  tip_img: string;
                  _id: string;
                  tip_title: string;
                },
                i: number
              ) => (
                <div key={i} style={{ textAlign: "center", marginTop: "45px" }}>
                  <Link
                    to={{
                      pathname: `/tips/tip/${element._id}`,
                      state: { tip: element },
                    }}
                  >
                    <img
                      src={element.tip_img}
                      style={{ cursor: "pointer" }}
                      alt="tip"
                      className="imgstyle"
                    ></img>
                    <p>{element.tip_title} </p>
                    {/* <Fovrite /> */}
                  </Link>
                </div>
              )
            )}
        </div>
      </div>
    );
  }
}

export default Tips;
