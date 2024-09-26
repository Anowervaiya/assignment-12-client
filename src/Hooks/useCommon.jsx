import React from 'react'
const AxiosCommon = axios.create({
  baseURL: 'http://localhost:3000',

});
function useCommon() {
  return AxiosCommon;
}

export default useCommon