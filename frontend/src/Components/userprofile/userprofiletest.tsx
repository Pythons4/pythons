import React, { useState } from "react";
import store from "../../store";
import Popup from "./popupwindo";
import PopupBio from "./popupinfoedit";
import TimeAgo from "react-timeago";
import { Button } from "@material-ui/core";

import Posts from "./tabs";

import { signout } from "../../store/actions/userActions";
import "./user.css";

interface Test {
  userinfo: any;
}
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

  console.log(test);

  const logOut = () => {
    store.dispatch(signout());
    console.log("hhhh");
  };

  return (
    <div>
      <div className="container">
        <div className="profile-header">
          <div className="profile-img">
            <img src={JSON.parse(test.userinfo).user_img} />
          </div>
          <div className="profile-nav-inf">
            <h3 className="user-name">{JSON.parse(test.userinfo).user_name}</h3>
            <div className="address">
              <p className="address">Palestine</p>
            </div>
            <Button className="logout_button" onClick={() => logOut()}>
              {" "}
              LogOut{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <p className="user-maile">
              <i className="fas fa-envelope"></i>
              {JSON.parse(test.userinfo).user_email}
            </p>
            <p className="mobile-no">
              <i className="fas fa-phone-volume"></i>
              {JSON.parse(test.userinfo).user_phon}
            </p>
            <div className="user-pio">
              <p className="pio"> Bio :{JSON.parse(test.userinfo).user_bio}</p>
            </div>
            <div className="button">
              <input
                className="button-img"
                type="button"
                value="change image"
                onClick={togglePopup}
              />
              {isOpen && (
                <Popup
                  userId={JSON.parse(test.userinfo)._id}
                  handleClose={togglePopup}
                />
              )}

              <input
                className="button-bio"
                type="button"
                value="change bio"
                onClick={togglePopupbio}
              />
              {isOpenbio && (
                <PopupBio
                  userId={JSON.parse(test.userinfo)}
                  handleClose={togglePopupbio}
                />
              )}
            </div>
            <p className="date">
              <TimeAgo
                date={
                  "Mon Dec 14 2020 16:03:46 GMT+0200 (Israel Standard Time)"
                }
              />
            </p>
            {console.log(new Date())}
          </div>
        </div>
        <div className="right-side">
          <div className="nav">
            <Posts />
            {/* <ul>
                            <li className="user-posts">Posts</li>
                            <li className="user-services">Services</li>
                            <li className="user-fevareits">Fevareits</li>
                        </ul> */}
          </div>
          {/* <div className="profile-body">
                        <div className="profile-posts tap">
                            <UserTips />

                        </div>
                        <div className="profile-services tap">
                            <UserServeces />

                        </div>
                        <div className="profile-fevareits tap">
                            <UserFevarets />

                        </div>

                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
