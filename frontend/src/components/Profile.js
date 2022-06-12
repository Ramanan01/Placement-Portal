import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {NavLink,Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: "black",
    fontFamily:'Fira Sans Condensed'
  },
  joinButton: {
    backgroundColor: "#35281E ",
    color: "white"
  },
  Logo: {
    marginRight: theme.spacing(6),
  },
  navItems: {
    textDecoration: "none",
    margin: theme.spacing(1.5),
    padding:5,
    backgroundColor: "black",
    color: "white",
    fontFamily:'Fira Sans Condensed'
  },
  title:{
    flexGrow: 1,
    textAlign:'left',
    fontFamily:'Fira Sans Condensed',
    color:'#FFFFF0'
  },
  activeNav:{
    textDecoration: "none",
    color: '#cc7722',
    margin: theme.spacing(1.5), 

  },
  navtit:{
     border:"none",
     textDecoration:"none"
  },
  partNav: {
    display: "flex",
    alignItems: "center",
  }
}))
const bgUrl = {
background: `url(https://i.pinimg.com/736x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg)`,
height: "100vh",
backgroundAttachment: 'local',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'

};

const headerstyle={
  fontFamily: 'Fira Sans Condensed', 
  textAlign:'center',
  backgroundColor: 'black',
  color:'#FFFFF0',
  fontweight: 400,
  border: '1px black',
  borderstyle:'solid',
  fontSize: 50,
  padding: 15,
  borderradius: 20
 };
 const disp={
  fontFamily: 'Fira Sans Condensed',
  color:'black',
  fontweight:800,
  fontsize:100
 };
 const index={
  fontFamily: 'Fira Sans Condensed',
  color:'black',
  fontweight:300,
  fontsize:50,
  marginRight:'900px'
 };
const Profile = () => {
  const navigate=useNavigate()
  const classes=useStyles()
    const [student,setStudent]=useState('')
    const [details,setDetails]=useState('')
    useEffect(() =>{
        getProfile()
    }, [])
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if(!user){
        navigate('/')
      }
    })
    async function getProfile(){
        const jwtToken = localStorage.getItem("jwt")
        const user = JSON.parse(localStorage.getItem('user'))
        const email=user.email
        console.log(email)
        console.log(user)
        const res=await fetch('/profile',{
          method: 'post',
          headers: {
            "Content-Type":"application/json",
            'Accept': 'application/json, text/plain, */*',
            "Authorization":"Bearer "+ jwtToken
          },
          body: JSON.stringify({'email':email})
        })
        const data= await res.json()
        console.log(data.profile)
        setDetails(data.profile)
    }

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    
    return (
      <AppBar style={bgUrl}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.partNav}>
          <div className={classes.Logo}>
            <Link to="/" className={classes.navtit}>
              <Typography variant="h4" className={classes.title}>
                AU Placements
              </Typography>
            </Link>
          </div>
          <NavLink exact to="/" activeClassName={classes.activeNav} className={classes.navItems}>
            <Typography variant="h6" noWrap>
              Home
            </Typography>
          </NavLink>
          <NavLink exact to="/applications" activeClassName={classes.activeNav} className={classes.navItems}>
            <Typography variant="h6" noWrap>
              Applications
            </Typography>
          
          </NavLink>
          <NavLink exact to="/registered" activeClassName={classes.activeNav} className={classes.navItems}>
            <Typography variant="h6" noWrap>
              Registered
            </Typography>
          </NavLink>
          <NavLink exact to="/profile" activeClassName={classes.activeNav} className={classes.navItems}>
            <Typography variant="h6" noWrap>
              Profile
            </Typography>
          </NavLink>
        </div>
        <div className={classes.partNav}>
          <Button
            style={{ backgroundColor: "Turquoise",
            color: "black",
            "&:hover": {
              backgroundColor: "#20B2AA",
            },marginLeft:'600px'}}
            onClick={logout}
          >
            <ExitToAppIcon />
            <Typography variant="body2" noWrap>
              Logout
            </Typography>
          </Button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </Toolbar>
      <div>
        <br/>
        <br/>
        <div>
      <b style={headerstyle}>PROFILE</b></div>
            <br></br>
            <br></br>
            <div style={{border: '1px solid black',marginLeft:'50px',marginRight:'50px',backgroundColor:'black',width:'500px'}}>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Name:&nbsp;
            {details.fullname}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Roll No:&nbsp;
            {details.rollno}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Department:&nbsp;
            {details.dept}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Email:&nbsp;
            {details.email}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Grade 10:&nbsp;
            {details.tenth}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Grade 12:&nbsp;
            {details.twelfth}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>CGPA:&nbsp;
            {details.CGPA}</p>
            </div>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <p>Phone No:&nbsp;
            {details.phone}</p>
            </div>
            </div>
          </div>  
    </AppBar>
  
        
        
    )
}
export default Profile
