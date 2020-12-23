import React from "react";
import "./profilestyle.css";
import store from "../../store";
import { updateuserimg } from "../../store/actions/userActions";
import { Button } from "@material-ui/core";
interface State {
  reviwesoursw: any;
  takethis: string;
  file: any;
}
interface Props {
  handleClose: any;
  userId: any;
}
class Popup extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      reviwesoursw: "",
      takethis: "",
      file: "",
    };
    this.handelimguplode = this.handelimguplode.bind(this);
    this.handelclikckimg = this.handelclikckimg.bind(this);
  }
  handelimguplode(e: any) {
    const file = e.target.files;
    this.previwefile(file);
    this.setState({
      takethis: file.name,
      file: file,
    });
  }
  previwefile(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = () => {
      this.setState({
        reviwesoursw: reader.result,
      });
    };
  }

  handelclikckimg() {
    store.dispatch(updateuserimg(this.state.file, this.props.userId));
  }

  render() {
    return (
      <div className="popup-box">
        <div className="box shadowpopup">
          <span className="close-icon" onClick={this.props.handleClose}>
            x
          </span>
          <div>
            <img
              alt="choosenimg"
              style={{ height: "50vh" }}
              src={
                this.state.reviwesoursw ||
                "https://www.flaticon.com/svg/static/icons/svg/964/964073.svg"
              }
            ></img>
            <br></br>
            <input
              type="file"
              id="actual-btn"
              name="img"
              accept="image/png, image/jpeg"
              onChange={this.handelimguplode}
              hidden
            ></input>
            <label htmlFor="actual-btn" className="uplodeimgbtn">
              {" "}
              Choose Image
            </label>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <div>
              <Button
                className="uplodeimgbtn"
                style={{
                  background: "#337BA7",
                  color: "white",
                  fontSize: "12px",
                  fontFamily: "'Poly', serif",
                }}
                onClick={() => {
                  this.handelclikckimg();
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;

//uplode user image to cloudinary and user database
