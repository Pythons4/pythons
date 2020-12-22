import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "./testnav.css";
import { Avatar, Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import store from "../../store"
import { Link } from "react-router-dom";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    var pathname = "/profiletest"
    var { whatincart } = store.getState().cartReducer
    var count = 0
    if (whatincart) {
        count = (Object.keys(JSON.parse(whatincart)).length)
    }
    var { userid }: any = store.getState().UserReducer
    var { userinfo }: any = store.getState().UserReducer

    var { adminid }: any = store.getState().AdminReduser
    var adminID = JSON.parse(adminid)
    var id = JSON.parse(userid)
    var theimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPasPbrVe2Txcc4aGbZkCddJkVTaj8uyb7A&usqp=CAU"
    if (id) {
        var userimg = JSON.parse(userinfo).user_img
        theimg = userimg
    }
    console.log(id)
    if (adminID) {
        pathname = "/adminprofile"
        id = adminID
        var { admininfo }: any = store.getState().AdminReduser
        var adminimg = JSON.parse(admininfo).user_img
        theimg = adminimg
    }
    var comp = <Link to='/signin' className='nav-link'><h4>login</h4></Link>
    if (id) {
        <Link to={pathname} className='nav-link'>
            <Avatar style={{ marginTop: '6px' }} className='header__avatar' src={theimg} />
        </Link>
    }
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container logo">
                    <Link to='/homepage'><h4>Sparkles</h4>
                    </Link>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/homepage' className='nav-link'  ><h4>Home</h4></Link>

                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/services' className='nav-link'><h4>Services</h4></Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to='/product' className='nav-link' ><h4>Products</h4></Link>
                    </li>
                    <li className="option " onClick={closeMobileMenu}>
                        <Link to='/tips' className='nav-link'><h4>Tips</h4></Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        {comp}
                    </li>
                    <li className="option" onClick={closeMobileMenu}>

                        <Link to={{ pathname: `/cart` }}>
                            <Badge badgeContent={count} color="secondary" style={{ marginTop: '10px' }}><ShoppingCartIcon className='header__avatar' style={{ fontSize: 30 }} /></Badge>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                        <MenuIcon className="menu-icon" />
                    )}
            </div>
        </div>
    );
};

export default Header;