import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useNavigate,Link} from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from './Navbar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 180,
  },
  toolbar:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor: "#35281E",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop:theme.spacing(10),
    paddingBottom: theme.spacing(7),
    backgroundColor: '#F9E4B7',
    minHeight:'100vh'
  },
  cardContent:{
    display: 'flex',
    justifyContent:'space-between',
    width: '100%',
    alignItems: 'center',
  },
  joinButton:{
    backgroundColor:'#cc7722',
    color:"white",
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#b7410e",
    },
  },
  joinButtonInverse:{
    backgroundColor:'#b7410e',
    color:"white",
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#cc7722",
    },
  },
  cardHeading:{
    padding: theme.spacing(2),
    fontWeight:'600',
    color:'black'
    // fontSize: '1.4rem'
  },
  heading:{
    paddingTop: theme.spacing(2.75),
    padding: theme.spacing(1.5),
    fontSize:'2.2rem',
    fontWeight:'bold',
    // textAlign: 'center'
  },
  cardDesc: {
    paddingTop: 0,
    padding: theme.spacing(2), 
  },
  Logo:{
    marginRight:theme.spacing(6),
  },
  navItems:{
    textDecoration: 'none',
    color:'white',
    margin:theme.spacing(1.5)
  },
  partNav:{
    display:'flex',
    alignItems: 'center',
  },
}));

const Orgforms = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const [forms,setForms]=useState([])

    useEffect(() =>{
      const company=localStorage.getItem("company")
      if(!company){
        navigate('/')
      }
    },[])
    useEffect(() =>{
        fetchForms() 
    },[])

    const fetchForms = async() => {
        const company=JSON.parse(localStorage.getItem("company"))
        const res = await fetch('/orgforms',{
            method:'post',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify({
                companyName: company.companyName
            })
          })
          const data = await res.json()
          setForms(data.forms)
    }


    if(forms.length===0){
        return(
          <div
          style={{ display:'flex',justifyContent: 'center',alignItems: 'center',height:'100vh',backgroundColor:'#F9E4B7',color:'#35281E'}}
          >
            <CircularProgress size={80} style={{color:"#35281E"}}/>
          </div>
        )
      }
  return (
    <div>
        <Navbar/>    
      {<main className={classes.content}>
        <Typography className={classes.heading} variant="h5">
           My forms
        </Typography>
        <Grid container spacing={4}>
          {
            forms?.map(a=>( 
              <Grid item lg={4} md={6} xs={12} key={a.id}>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Link to ={`/orgforms/${a._id.toString()}`} style={{ textDecoration: 'none', color: 'black'}}>
                    
                    <Typography variant="h5" component="div">
                    {a.role}
                    </Typography>
                    </Link>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {a.companyName}
                    </Typography>
                    <Typography variant="body2">
                    {a.description}
                    </Typography>
                </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        </main>}
    </div>
  )
}

export default Orgforms