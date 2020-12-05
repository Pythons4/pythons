import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
      <Link className='header__link' to='/' style={{ textDecoration: 'none' }}>
        <img className='header__logo' src='https://www.seekpng.com/png/small/115-1150202_emoji-emojisticker-blue-sparkles-blue-sparkles-png.png' alt='logo' />
        <h1>Sparkles</h1>
      </Link>
      

      <ul className="nav__links">
        <li >
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li >
          <Link to="/" style={{ textDecoration: 'none' }}>Serves </Link>
        </li>
        <li >
          <Link to="/" style={{ textDecoration: 'none' }}> Products</Link>
        </li>
        <li >
          <Link to="/" style={{ textDecoration: 'none' }}>Tips </Link>
        </li>
      </ul>
      <Link className='logbtn' to='/signin' style={{ textDecoration: 'none' }}>
        <Button id='logbtn' variant="contained" > Login </Button>
      </Link>

    </div>
  )
}

export default Navbar