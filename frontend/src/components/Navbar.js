import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {NavLink,useNavigate,Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import announce from './announce.png';

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
      color: '#FFFFF0',
      fontFamily:'Fira Sans Condensed',
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
const headerstyle={
  fontFamily: 'Fira Sans Condensed', 
  textAlign:'center',
  backgroundColor: 'black',
  color:'#FFFFF0',
  fontweight: 400,
  border: '1px black',
  borderstyle:'solid',
  fontSize: 30,
  padding: 15,
  borderradius: 20,
  width:'400px',
  textAlign:'center'
 };
export default function Navbar() {

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
                    AU Placements
                  </Typography>
                </Link>
              </div>
              <NavLink exact to="/sdashboard"  className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Home
                </Typography>
              </NavLink>
              <NavLink exact to="/applications" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Applications
                </Typography>
              
              </NavLink>
              <NavLink exact to="/registered" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Registered
                </Typography>
              </NavLink>
              <NavLink exact to="/profile" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
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
                }}}
                onClick={logout}
              >
                <ExitToAppIcon />
                <Typography variant="body2" noWrap className={classes.navfont}>
                  Logout
                </Typography>
              </Button>
            </div>
          </Toolbar>
            <div style={{marginLeft:'550px'}}>
              <h1 style={headerstyle}>Welcome to the Placement Portal!</h1>
            </div>
             <br/>
             <Grid lg={12} item container spacing={4}>
              <Grid item lg={6} xs={6}>
              <div style={{borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'50px',marginRight:'50px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}>Tips for Placements</h3>
              <ul style={{textAlign:'left',listStyleType:'square'}}>
                <li>Research, Research and Research</li>
                <li>Prepare a strong Resume</li>
                <li>Give utmost Attention to your company's Presentation about itself</li>
                <li>Attend Mock interviews</li>
                <li>Be Punctual</li>
                <li>Appear Presentable</li>
              </ul>
            </div>
            </Grid>
            <Grid item lg={6} xs={6}>
            <div style={{boxShadow:20,borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'200px',marginRight:'200px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}>Websites for Placement Preparation</h3>
              <ol style={{textAlign:'left',listStyleType:'square'}}>
                <li><a
        
          href="https://indiabix.com/"
          target="_blank"
          rel="noopener noreferrer"
                      >
                  Indiabix</a>
                 </li>
                <li><a
        
        href="https://www.geeksforgeeks.org/"
        target="_blank"
        rel="noopener noreferrer"
                    >
                GeeksforGeeks</a></li>
                <li><a
        
        href="https://www.hackerrank.com/"
        target="_blank"
        rel="noopener noreferrer"
                    >
                Hackerrank</a></li>
                <li><a
        
        href="http://codeforces.com/"
        target="_blank"
        rel="noopener noreferrer"
                    >
                Codeforces</a></li>
                <li><a
        
        href="https://leetcode.com/"
        target="_blank"
        rel="noopener noreferrer"
                    >
                Leetcode</a></li>
                <li><a
        
        href="https://www.glassdoor.co.in/index.htm?countryRedirect=true"
        target="_blank"
        rel="noopener noreferrer"
                    >
                GlassDoor</a></li>
              </ol>
            </div>
            </Grid>
            <Grid item lg={6} xs={6}>
            <div style={{boxShadow:20,borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'200px',marginRight:'200px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}>Companies visiting this August!</h3>
                   <b>VISA</b><br/>
                   <b>Morgan Stanley</b><br/>
                  <b>Wells Fargo</b><br/>
                  <b>Citi Corp</b><br/>
                  <b>Root Quotient</b><br/>
                  <b>SAP Labs</b><br/>
             </div>
            </Grid>

            <Grid item lg={6} xs={6}>
            <div style={{boxShadow:20,borderRadius:10,fontFamily: 'Fira Sans Condensed', border: '1px solid black',marginLeft:'100px',marginRight:'100px',backgroundColor:'#FFFFF0',width:'500px',color:'black'}}>
              <h3 style={{backgroundColor:'black',color:'white'}}><img src={announce} style={{height:'25px',marginTop:'10px', borderRadius:10}}/> Announcements!</h3>
                   <h4 style={{color:'red',textAlign:'left'}}><marquee>Send your resumes to Wells Fargo by 20/07/22 if applicable!</marquee></h4>
                   <h4 style={{color:'red',textAlign:'left'}}><marquee>Mock Interview sessions starting from tomorrow!</marquee></h4>
                   <h4 style={{color:'red',textAlign:'left'}}><marquee>Caterpillar's 2022 Hackathon Registrations open!</marquee></h4>
             </div>
            </Grid>
            </Grid>
          

            
        </AppBar>
        
    );
}