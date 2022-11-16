import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query'

const baseUrl='https://coinranking1.p.rapidapi.com/coin'
const headers={
    'X-RapidAPI-Key': 'effbb878d5msh464e463278c9d6dp1a0eb7jsn88b86efb05c3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }

export const CryptoApi=createApi