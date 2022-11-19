import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl='https://coinranking1.p.rapidapi.com'
const Apiheaders={
    'X-RapidAPI-Key': 'effbb878d5msh464e463278c9d6dp1a0eb7jsn88b86efb05c3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
  const createRequest=(url)=>({url,headers : Apiheaders})
export const CryptoApi=createApi({
  reducerPath:'CryptoApi',
  baseQuery:fetchBaseQuery(baseUrl),
  endpoints: (builder)=>({
    getCryptos: builder.query({
      query: ()=>createRequest('/coins')
    })
  })

})
export const {
  useGetCryptosQuery
}=CryptoApi;