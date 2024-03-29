import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {NavLink,useNavigate,Link} from 'react-router-dom'

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
export default function Navbarorg() {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    const classes = useStyles()
    return (
        
           <Toolbar className={classes.toolbar}>
            <div className={classes.partNav}>
              <div className={classes.Logo}>
                <Link to="/" className={classes.navtit}>
                  <Typography variant="h4" className={classes.title}>
                  AU Placements-Org
                  </Typography>
                </Link>
              </div>
              <NavLink exact to="/orgdashboard" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Home
                </Typography>
              </NavLink>
              <NavLink exact to="/orgforms" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap className={classes.navfont}>
                  Forms
                </Typography>
              </NavLink>
              <NavLink exact to="/registerform" activeClassName={classes.activeNav} className={classes.navItems}>
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
    
    );
}