import React,{ useState } from 'react'
import {Row , Col,Card} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom';
import millify from 'millify';
const Cryptocurrencies = ({simplified}) => {
  const count = 100;
   console.log(count)
  const {data:cryptosList,isFetching}=useGetCryptosQuery(count);
  const[cryptos,setCryptos]=useState(cryptosList?.data?.coins); 

  console.log(cryptos)
  if(isFetching) return 'loading...';
  return (
    <>
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency)=>(
          <Col xs={24} sm={12} lg={6} key={currency.id}>
              <Link to={`/crypto/${currency.id}`}> 
                  <Card className='crypto-card' title={`${currency.rank}.${currency.name}`}
                    extra = {<img className='crypto-image'src={currency.iconUrl }></img>}            
                  hoverable
                  > 
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market CAP: {millify(currency.marketCap)} </p>
                  <p>Daily Change: {millify(currency.change)} </p>
                  <p>`${count}`</p>
                  </Card>
             </Link>
          </Col>


      ))}

    </Row>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Cryptocurrencies