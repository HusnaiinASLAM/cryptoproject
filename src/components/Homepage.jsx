import React from 'react'
import { Typography,Row,Col,Statistic } from 'antd'

const Homepage = () => {
  return (
    <>
    <Typography.Title className='heading' style={{margin: 17, }}> Crypto Data</Typography.Title>
    <Row style={{marginLeft: 20}}>
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