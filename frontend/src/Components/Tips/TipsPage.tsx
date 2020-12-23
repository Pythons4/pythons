//main tips page
import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import { GET_ALL } from "../../store/actions/getalltips";
import PostAddSharpIcon from "@material-ui/icons/PostAddSharp";

export class Tips extends Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    var { userid }: any = store.getState().UserReducer;
    super(props);
    this.state = {
      tips: store.getState().tipsReducer,
      user_id: JSON.parse(userid),
    };
  }

  //get all tips from database (via GET_ALL action)
  componentDidMount() {
    store.dispatch(GET_ALL());
    store.subscribe(() => {
      this.setState({
        tips: store.getState().tipsReducer,
      });
    });
  }
  render() {
    // console.log(this.state.user_id);
    return (
      <div>
        <div ><div
          style={{
            display: "inline-block",
            fontFamily: "Poly",
            color: "#A04D25",
            width: '50vw',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          {this.state.user_id && this.state.tips.tips && (
            <h3 onClick={(event) => (window.location.href = "/tip/add")}>Share your tip  <PostAddSharpIcon
              color="primary"
              style={{ fontSize: 30, cursor: 'pointer' }}

            /></h3>
          )}
        </div>

        </div>
        <div
          className="d-flex flex-wrap justify-content-around "
          style={{
            marginBottom: "30px",
            padding: "10px",
          }}
        >
          {this.state.tips.tips ? (
            this.state.tips.tips
              .slice(0)
              .reverse()
              .map(
                (
                  element: {
                    tip_text: string;
                    tip_img: string;
                    _id: string;
                    tip_title: string;
                    user_name: string;
                  },
                  i: number
                ) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "60px",
                      height: "280px",
                      width: "280px",
                      position: "relative",
                      paddingTop: "40px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  >
                    <Link
                      to={{
                        pathname: `/tips/tip/${element._id}`,
                        state: { tip: element },
                      }}
                    >
                      <img
                        src={element.tip_img}
                        style={{
                          margin: "0",
                          display: "block",
                          height: "100%",
                          width: "100%",
                          position: "relative",
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                        }}
                        alt="tip"
                      // className="imgstyle"
                      ></img>
                      <div
                        style={{
                          backgroundColor: "#e6f0fa",
                          height: "80px",
                          marginTop: "-17px",
                          position: "relative",
                          borderBottomLeftRadius: "15px",
                          borderBottomRightRadius: "15px",
                        }}
                      >
                        <p
                          style={{
                            marginLeft: "10px",
                            color: "#A04D25",
                            fontFamily: "Poly",
                            fontSize: "20px",
                            paddingTop: "10px",
                          }}
                        >
                          {element.tip_title.slice(0, 24)}...
                        </p>
                        <p
                          style={{
                            marginLeft: "10px",
                            color: "#A04D25",
                            fontFamily: "Poly",
                            fontSize: "15px",
                          }}
                        >
                          By: {element.user_name}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              )
          ) : (
              <img
                src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif"
                alt="theimg"
                style={{ width: "230px" }}
              ></img>
            )}
        </div>
      </div>
    );
  }
}

export default Tips;
