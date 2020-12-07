import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import './Navbar.css'




const Navbar = () => {
    return (
        <nav >
            <div className='logo'>
                <Link to='/homepage' ><h4>Sparkles</h4>
                </Link>
            </div>
            <ul className='nav-links' >
                <li >
                    <Link to='/homepage' className='nav-link'  >Home</Link>
                </li>
                <li >
                    <Link to='/' className='nav-link'>Serveses</Link>
                </li>

                <li >
                    <Link to='/product' className='nav-link' >Products</Link>
                </li>
                <li >
                    <Link to='/tips' className='nav-link'>Tips</Link>
                </li>
                <li>
                    <Link to='/signin' className='nav-link'>login</Link>
                </li>
            </ul>


        </nav>
    )
}



export default Navbar;