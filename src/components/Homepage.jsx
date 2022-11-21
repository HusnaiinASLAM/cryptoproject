import React from 'react'
import { Typography,Row,Col,Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const Homepage = () => {
  const {data,isFetching}=useGetCryptosQuery(10);
  console.log(isFetching);
  console.log(data);
  const globalStats=data?.data?.stats;
  if (isFetching) return 'Loading ....';
 
  return (
    <>
    <Typography.Title className='heading' style={{margin: 17, }}> Crypto Data</Typography.Title>
    <Row style={{marginLeft: 20}}>
        <Col span={12}><Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}></Statistic></Col>
    </Row>
    <div className='home-heading-container' style={{margin: 17, }} >
      <Typography.Title level={2} className='home-title'>Top 10 CryptoCurrencies of the world</Typography.Title>
      <Typography.Title level={3} className='show-more'><Link to={'/cryptocurrencies'}>Show More </Link></Typography.Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container' style={{margin: 17, }}>
      <Typography.Title level={2} className='home-title'>Top 10 News of the world</Typography.Title>
      <Typography.Title level={3} className='show-more'><Link to={'/news'}>Show More </Link></Typography.Title>
    </div>
    <News simplified/>
    
    
    
    </>
  )
}

export default Homepage