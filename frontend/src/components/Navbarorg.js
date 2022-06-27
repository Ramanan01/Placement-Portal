import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {NavLink,useNavigate,Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';

const company=localStorage.getItem("org");
console.log({company})
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
    },
    navfont: {
      fontFamily: 'Fira Sans Condensed'
    }
}))
const bgUrl = {
  background: `url(https://i.pinimg.com/736x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg)`,
  height: "100vh",
  backgroundAttachment: 'local',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};
const image={
  width: "30vh" ,
  height: "30vh",
  borderRadius:100,
  marginLeft:'20px'
};
const headerstyle={
    fontFamily: 'Fira Sans Condensed', 
    textAlign:'center',
    backgroundColor: 'black',
    color:'#FFFFF0',
    fontweight: 300,
    border: '1px black',
    borderstyle:'solid',
    fontSize: 50,
    padding: 15,
    borderradius: 20,
  
   };
export default function Navbarorg() {

    const navigate = useNavigate()
    
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
   
    const classes = useStyles()
    return (
        <AppBar style={bgUrl}>
           <Toolbar className={classes.toolbar}>
            <div className={classes.partNav}>
              <div className={classes.Logo}>
                <Link to="/" className={classes.navtit}>
                  <Typography variant="h4" className={classes.title}>
                  AU Placements-Org
                  </Typography>
                </Link>
              </div>
              <NavLink exact to="/orgdashboard"  className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Home
                </Typography>
              </NavLink>
              <NavLink exact to="/orgforms"  className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Forms
                </Typography>
              </NavLink>
              <NavLink exact to="/registerform"  className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Create Form
                </Typography>
              </NavLink>
            </div>
            <div className={classes.partNav}>
              <Button
                 style={{ backgroundColor: "Turquoise",
                 color: "black",
                 "&:hover": {
                   backgroundColor: "#20B2AA",
                 }}}
                 onClick={logout}
              >
                <ExitToAppIcon />
                <Typography variant="body1" noWrap className={classes.navfont}>
                  Logout
                </Typography>
              </Button>
            </div>
          </Toolbar>
          
              <h1 style={headerstyle}>Welcome to the Placement Portal {company}!</h1>
               
             {/*<br/>
             <img style={image} src="https://cdn.kiit.ac.in/wp-content/uploads/2021/12/placement-2022.jpg"></img>
                <br/>*/}
             <Grid lg={12} item container spacing={4}>
              <Grid item lg={6} xs={6}>
              <div style={{borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'50px',marginRight:'50px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}>Departments Available for Placements</h3>
              <ul style={{textAlign:'left',listStyleType:'square'}}>
                <li>Computer Science</li>
                <li>Information Technology</li>
                <li>ECE</li>
                <li>EEE</li>
                <li>M.Tech IT</li>
                <li>M.Tech CSE</li>
              </ul>
            </div>
            </Grid>
            <Grid item lg={6} xs={6}>
            <div style={{boxShadow:20,borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'200px',marginRight:'200px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}>Aptitude Tests and Interview Sessions</h3>
              <h4 style={{color:'red'}}><marquee>Aptitude I for CSE students-27/07/2022</marquee></h4>
                   <h4 style={{color:'red'}}><marquee>Technical Interview batch II-28/07/2022</marquee></h4>
                   <h4 style={{color:'red'}}><marquee>SHORTLISTED CANDIDATES LIST OUT!</marquee></h4>
             </div>
            </Grid>
            </Grid>
        </AppBar>
    );
}