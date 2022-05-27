import React,{useEffect} from 'react'
import Navbar from './Navbar'
import {useNavigate} from 'react-router-dom'

const SDashboard = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
      navigate('/')
    }
  })
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default SDashboard