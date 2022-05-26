import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes, useNavigate,useLocation} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import Organization from './components/Organization'
import SDashboard from './components/SDashboard'
import Profile from './components/Profile'
import Registerform from './components/Registerform'
import Applications from './components/Applications';
import Registered from './components/Registered';
import ODashboard from './components/ODashboard';
import Orgforms from './components/Orgforms';
import FormDetails from './components/FormDetails'

function Routers(){
  const navigate = useNavigate()
  const location=useLocation()
  const user = JSON.parse(localStorage.getItem("user"))
  const company=JSON.parse(localStorage.getItem("company"))
  if(user){
    console.log(user)
    if(location.pathname.startsWith('/login') ){
      navigate('/login')
    }
    else if(location.pathname.startsWith('/signup')){
      navigate('/signup')
    }
  }
  else{
    history.push('/login')
  }
  return(
    <>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/organization" element={<Organization/>}/>
      <Route path="/sdashboard" element={<SDashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/registerform" element={<Registerform/>}/>
      <Route path="/applications" element={<Applications/>}/>
      <Route path="/registered" element={<Registered/>}/>
      <Route path="/orgdashboard" element={<ODashboard/>}/>
      <Route path="/orgforms" element={<Orgforms/>}/>
      <Route path="/orgforms/:formid" element={<FormDetails/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routers/>
        </BrowserRouter>
    </div>
  );
}

export default App;
