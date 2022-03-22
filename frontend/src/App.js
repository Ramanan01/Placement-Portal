import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes, Navigate} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Signup from './components/Signup';

function Routers(){
  return(
    <>

    <Routes>
      <Navigate to="/"/>
    </Routes>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Signup/>
        {/*<BrowserRouter>
          <Routers/>
        </BrowserRouter>*/}
    </div>
  );
}

export default App;
