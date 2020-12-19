//main tips page
import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import { GET_ALL } from "../../store/actions/getalltips";
// import {
//   CardGroup,
//   Card,
//   Button,
//   CardImg,
//   CardTitle,
//   CardText,
//   CardDeck,
//   CardSubtitle,
//   CardBody,
// } from "reactstrap";
export class Tips extends Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tips: store.getState().tipsReducer,
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
    return (
      <div>
        <div
          className="d-flex flex-wrap justify-content-around "
          style={{
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          {this.state.tips.tips &&
            this.state.tips.tips.map(
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
                    marginTop: "70px",
                    height: "300px",
                    width: "300px",
                    position: "relative",
                    paddingTop: "40px",
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
                        }}
                      >
                        {element.tip_title}
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
            )}
        </div>
        {/* <CardDeck>
          {this.state.tips.tips &&
            this.state.tips.tips.map(
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
                <Card
                  key={i}
                  // className="d-flex flex-wrap justify-content-around "
                  // style={{
                  //   marginBottom: "50px",
                  //   marginTop: "18px",
                  //   // borderRadius: "50px",
                  // }}
                  style={{ width: "18rem" }}
                >
                  <Link
                    to={{
                      pathname: `/tips/tip/${element._id}`,
                      state: { tip: element },
                    }}
                  >
                    <CardImg
                      variant="top"
                      src={element.tip_img}
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                    <CardBody>
                      <CardTitle>{element.tip_title}</CardTitle>
                      <CardText>By: {element.user_name}</CardText>
                    </CardBody>
                  </Link>
                </Card>
              )
            )}
        </CardDeck> */}
      </div>
    );
  }
}

export default Tips;
