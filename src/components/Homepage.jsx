import React from 'react'
import { Typography,Row,Col,Statistic } from 'antd'

const Homepage = () => {
  return (
    <>
    <Typography.Title className='heading'> Crypto Data</Typography.Title>
    <Row>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
        <Col span={12}><Statistic title='total currencies' value={66}></Statistic></Col>
    </Row>
    
    
    
    
    </>
  )
}

export default Homepage