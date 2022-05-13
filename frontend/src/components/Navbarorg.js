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
      backgroundColor: "#35281E",
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
      color: 'white',
      margin: theme.spacing(1.5),
    },
    activeNav:{
      textDecoration: "none",
      color: '#cc7722',
      margin: theme.spacing(1.5),  
    },
    partNav: {
      display: "flex",
      alignItems: "center",
    }
}))

export default function Navbarorg() {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    const classes = useStyles()
    return (
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <div className={classes.partNav}>
              <div className={classes.Logo}>
                <Link to="/" className={classes.navItems}>
                  <Typography variant="h6">
                    PP
                  </Typography>
                </Link>
              </div>
              <NavLink exact to="/" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap>
                  Home
                </Typography>
              </NavLink>
              <NavLink exact to="/orgforms" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap>
                  Forms
                </Typography>
              </NavLink>
              <NavLink exact to="/registerform" activeClassName={classes.activeNav} className={classes.navItems}>
                <Typography variant="h6" noWrap>
                  Create Form
                </Typography>
              </NavLink>
            </div>
            <div className={classes.partNav}>
              <Button
                style={{ color: "white", margin: "7px" }}
                onClick={logout}
              >
                <ExitToAppIcon />
                <Typography variant="body1" noWrap>
                  Logout
                </Typography>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
    );
}