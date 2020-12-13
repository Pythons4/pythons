//tip page
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Tip.css";
import store from "../../store";
import configdata from "../../csrftoken";
import axios from "axios";
import { login } from "../../store/actions/userActions";
import { post } from "jquery";
const Tip = (props: any) => {
  var tip = props.location.state.tip;
  var text = "";
  //   const [commints, setCommints] = useState();
  console.log(tip);
  //   const getallcommints = () => {
  //     axios
  //       .get("/api/tipcomments/")
  //       .then((res) => {
  //         setCommints(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const handelcliking = () => {
    axios
      .post(
        "/api/tipcomments/",
        {
          commint_text: text,
          user_id: "5fd5fee9303c97facb7db817",
          tip_id: tip._id,
        },
        configdata
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(tip._id);
  };
  function handeltext(e: any) {
    console.log(e.target.value);
    text = e.target.value;
  }
  //   getallcommints();
  //   console.log(commints);
  return (
    <div>
      <div
        className="d-flex flex-wrap justify-content-around catdiv"
        style={{ marginBottom: "50px", marginTop: "18px" }}
      >
        <p>{tip.tip_title} </p>
        <img
          src={tip.tip_img}
          style={{ cursor: "pointer" }}
          alt="tippage"
          className="imgstyle"
        ></img>
        <p>{tip.tip_text} </p>
      </div>
      <div>
        <form>
          <input type="text" name="comments" onChange={handeltext}></input>
          <button type="button" onClick={handelcliking}></button>
        </form>
        {/* <div
          className="d-flex flex-wrap justify-content-around catdiv"
          style={{ marginBottom: "50px", marginTop: "18px" }}
        >
          {commints &&
            commints.map(
              (element: { commint_text: commint_text }, i: number) => (
                <div key={i} style={{ textAlign: "center", marginTop: "45px" }}>
                  <p>{element.commint_text} </p>
                </div>
              )
            )}
        </div> */}
      </div>
    </div>
  );
};

export default Tip;
