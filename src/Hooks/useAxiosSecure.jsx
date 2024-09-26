import React from 'react'
import axios from 'axios'
const AxiosSecure = axios.create({
  baseURL: 'https://assingment-12-lilac.vercel.app',
  // baseURL: 'http://localhost:3000',
  withCredentials: true,
});
function useAxiosSecure() {
 
  return AxiosSecure;
}

export default useAxiosSecure