
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
import Template from './Template';
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
    backgroundColor:'black',
    color:"white",
    margin: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#b7410e",
    },
  },
  joinButtonInverse:{
    backgroundColor:'black',
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
const Applications = () => {
    const classes = useStyles();
    const navigate = useNavigate()

    
    const [applications,setApplications]=useState([])
    const [userApplications,setUserApplications]=useState([])
    const [blank,setblank]=useState(false)
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if(!user){
        navigate('/')
      }
    })

    useEffect(() =>{
        fetchApplications() 
        fetchUserApplications()
    },[])

    const fetchUserApplications = async() => {
        const user=JSON.parse(localStorage.getItem("user"))
        const res = await fetch('/userApplications',{
            method:'post',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify({
                id: user._id
            })
          })
          const data = await res.json()
          setUserApplications(data.appliedCompanies.registeredApplications)
    }

    const fetchApplications = async() => {
        const jwtToken = localStorage.getItem("jwt")
        const res = await fetch('/allApplications',{
            method: 'get',
            headers: {
                "Content-Type":"application/json",
            }
        })
        const data = await res.json()
        let finApplications=[]
        const allApplications=data.applications
        const user=JSON.parse(localStorage.getItem("user"))
        allApplications.map(a=>{
            if(user.CGPA>=a.minCGPA && user.tenth>=a.minTenth && user.twelfth>=a.minTwelfth){
                finApplications=[...finApplications, a]
            }
        })
        if((finApplications).length===0)
          {
            setblank(true)
          }
        setApplications(finApplications)
    }

    async function applyCompany(a) {
        setUserApplications([...userApplications,a._id])
        const user=JSON.parse(localStorage.getItem("user"))
        const jwtToken = localStorage.getItem("jwt")
        const res = await fetch('/apply',{
          method: 'put',
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            companyId:a._id,
            id:user._id
          })
        })
      }
    
      if(blank===true)
    {
      navigate('/NoApp')
    }
    if(applications.length===0){
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
           <Template/>
    {<main className={classes.content}>
        <Typography style={headerstyle} variant="h5">
           APPLICATIONS
        </Typography>
        <br/>
        <Grid container spacing={4}>
          {
            applications?.map(a=>( 
              <Grid item lg={4} md={6} xs={12} key={a.id}>
                <Card style={{color:'black'}}sx={{ minWidth: 275 }}>
                <CardContent style={{backgroundColor:'turquoise'}}>
                    <Typography variant="h4" component="div">
                    {a.role}
                    </Typography>
                    <br/>
                    <Typography variant="h5" sx={{ mb: 2.5 }} color="text.secondary">
                    {a.companyName}
                    </Typography>
                    <br/>
                    <Typography variant="h6">
                    {a.description}
                    </Typography>
                </CardContent>
                <CardActions>
                {
                    userApplications?.includes(a._id)?
                    <>
                      {console.log(a._id)}
                    {/* <Link to ={`/domain/${d._id.toString()}`} style={{ textDecoration: 'none' }}>
                    
                    </Link> */}
                    <Button className={classes.joinButtonInverse} disabled style={{color: "white"}}>
                    <Typography variant="body1" noWrap style={{color: 'white'}}>Applied</Typography>
                  </Button>
                  </>
                    :
                    <Button onClick={()=>applyCompany(a)} className={classes.joinButton}>
                      <Typography variant="body1" noWrap>Apply</Typography>
                    </Button>
                    }
                </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        </main>}
    </div>
  )
}

export default Applications