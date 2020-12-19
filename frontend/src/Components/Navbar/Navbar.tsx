import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { Button, Avatar } from '@material-ui/core'
import './Navbar.css'

import store from "../../store"

const Navbar = () => {
    var { userid }: any = store.getState().UserReducer
    var id = JSON.parse(userid)
    console.log(id)
    return (
        <nav >
            <div className='logo'>
                <Link to='/homepage' style={{ textDecoration: "none" }} ><h4>Sparkles</h4>
                </Link>
            </div>
            <ul className='nav-links' >
                <li >
                    <Link to='/homepage' className='nav-link'  ><h4>Home</h4></Link>
                </li>
                <li >
                    <Link to='/services' className='nav-link'><h4>Services</h4></Link>
                </li>

                <li >
                    <Link to='/product' className='nav-link' ><h4>Products</h4></Link>
                </li>
                <li >
                    <Link to='/tips' className='nav-link'><h4>Tips</h4></Link>
                </li>

                {
                    id ?
                        <div className='header__profile'>
                            <Link to="/profiletest" style={{ textDecoration: "none" }}>
                                <Avatar className='header__avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPasPbrVe2Txcc4aGbZkCddJkVTaj8uyb7A&usqp=CAU" />
                            </Link>

                        </div>
                        :
                        <Link to='/signin' className='nav-link'>login</Link>

                }

                {/* <li>
                    <Link to='/signin' className='nav-link'>login</Link>
                </li> */}

            </ul>


        </nav>
    )
}



export default Navbar