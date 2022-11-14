import React from 'react'
import { Typography } from 'antd';
import { Avatar } from '@mui/material';
import {Link } from 'react-router-dom'
import img from '../images/cryptocurrency.png'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className='logoContainer'>
        <Avatar src={img}/>
            <Typography.Title>
             <Link to='/'>CryptoApp</Link>
            </Typography.Title>

        </div>
        
        
    </div>
  )
}

export default Navbar 