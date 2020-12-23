import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Section from "./section";
import Footer from "./Footer";

const Homepage = (props: any) => {
  return (
    <>
      <div>
        <div data-test="container-img" className="container-img">
          <p className="text">
            {/* Cleaning is hard at first, messy in the middle and gorgeous in the
            end */}
            We Make Your Place Sparkle <img alt='homepageimg' style={{ width: '44px' }} src='https://res.cloudinary.com/dve46qnma/image/upload/v1608469290/appimgs/qxexrer4ea4dztfiss7o.png'></img>
          </p>

          <div className="container-btns">
            <Link to="/services" style={{ textDecoration: "none" }}>
              <Button id="btn" style={{ backgroundColor: '#B2D3EF' }} variant="contained">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Section />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
