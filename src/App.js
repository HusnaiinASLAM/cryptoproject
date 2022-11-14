import React from 'react'
import {Menu,Navbar} from './components'
import { Layout,Typography,Space } from 'antd'
import { Route, Routes,Router } from "react-router";
import { Link } from 'react-router-dom';
import {Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News} from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar></Navbar>
        </div>
        <div className='main'>
             <Layout>
              
              <Routes>
                <Route exact path='/' element={<Homepage/>}/>

                <Route path='/exchange' element={<Exchanges/>}/>
                  
                
                <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                
                
                <Route path='/crypto/:coinId' element={<CryptoDetails />}/>
                  
              
                <Route path='news' element={<News />}/>
                  
               
              </Routes>
             </Layout>
        
        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
        </div>
      </div>
    </div>
  )
}

export default App