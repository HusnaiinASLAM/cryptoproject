import React from 'react'
import { MoneyCollectOutlined,HomeOutlined,BulbOutlined,FundOutlined } from '@ant-design/icons';
import { Typography,Menu } from 'antd';
import { Avatar } from '@mui/material';
import {Link } from 'react-router-dom'
import img from '../images/cryptocurrency.png'


const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
        <Avatar src={img} size='large'/>
            <Typography.Title level={2} className='logo' >
             <Link to='/'>CryptoApp</Link>
            </Typography.Title>
        </div>
       
        
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link to='/cryptocurrencies'>CryptoCurrency</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
          <Link to='/exchange'>Exchange</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
        
    </div>
  )
}

export default Navbar 