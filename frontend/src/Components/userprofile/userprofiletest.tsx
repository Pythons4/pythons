import React, { useState } from "react";
import store from "../../store";
import Popup from "./popupwindo";
import PopupBio from "./popupinfoedit";
import TimeAgo from "react-timeago";
import { Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import Posts from "./tabs";
import MediaQuery from "react-responsive";
import { signout } from "../../store/actions/userActions";
import "./user.css";
import "./profilestyle.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenbio, setIsOpenbio] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const togglePopupbio = () => {
    setIsOpenbio(!isOpenbio);
  };
  var test: any = store.getState().UserReducer;

  const logOut = () => {
    store.dispatch(signout());
  };

  return (
    <div>
      <div className="container">
        {/* <MediaQuery minDeviceWidth={1300} device={{ deviceWidth: 1900 }}> */}
        <div className="profile-header">
          {/* <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div> */}
          <div className="profile-img">
            <img src={JSON.parse(test.userinfo).user_img} alt="usrimg" />
          </div>
          <div className="profile-nav-inf">
            <h3 className="user-name">{JSON.parse(test.userinfo).user_name}</h3>
            <div className="address">
              <p className="address">Palestine</p>
            </div>
            <Button
              // className="logout_button"
              id="buttoun"
              onClick={() => logOut()}
            >
              {" "}
              LogOut{" "}
            </Button>
          </div>
        </div>
        {/* </MediaQuery> */}
      </div>
      <div className="main-bd">
        <div className="left-side" style={{ height: '100vh' }}>
          <div className="profile-side">
            <p className="user-maile">
              {/* <i className="fas fa-envelope"></i> */}
              {/* <FontAwesomeIcon icon={['fab', 'microsoft']} /> */}
              <EmailIcon id="icon"></EmailIcon>
              {JSON.parse(test.userinfo).user_email}
            </p>
            <p className="mobile-no">
              <CallIcon id="icon"></CallIcon>
              {JSON.parse(test.userinfo).user_phon}
            </p>
            <div className="user-pio">
              <p className="pio"> Bio {JSON.parse(test.userinfo).user_bio}</p>
            </div>
            <div className="button">
              <input
                className="button-img"
                type="button"
                id="buttoun1"
                value="change image"
                onClick={togglePopup}
              />

              <input
                className="button-bio"
                type="button"
                id="buttoun1"
                value="change bio"
                onClick={togglePopupbio}
              />
            </div>
            <p className="date">
              <TimeAgo
                date={
                  "Mon Dec 14 2020 16:03:46 GMT+0200 (Israel Standard Time)"
                }
              />
            </p>
          </div>
        </div>

        <div className="right-side">
          <div className="nav">
            <Posts />
          </div>
        </div>
      </div>
      {isOpen && (
        <Popup
          userId={JSON.parse(test.userinfo)._id}
          handleClose={togglePopup}
        />
      )}
      {isOpenbio && (
        <PopupBio
          userId={JSON.parse(test.userinfo)}
          handleClose={togglePopupbio}
        />
      )}
    </div>
  );
}

export default App;
