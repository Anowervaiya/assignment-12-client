import React, { useContext } from 'react'
import { ContextAPI } from '../AuthProvider/AuthProvider'

function useAuth() {
  const result = useContext(ContextAPI)
  return result
}

export default useAuth