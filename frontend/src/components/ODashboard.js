import React,{useEffect} from 'react'
import Navbarorg from './Navbarorg'
import { useNavigate } from 'react-router-dom'

const ODashboard = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const company = JSON.parse(localStorage.getItem("company"))
    if(!company){
      navigate('/')
    }
  })
  return (
    <div>
        <Navbarorg></Navbarorg>
    </div>
  )
}

export default ODashboard