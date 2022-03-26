import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes, Navigate} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import Organization from './components/Organization'

function Routers(){
  return(
    <>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/organization" element={<Organization/>}/>
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
