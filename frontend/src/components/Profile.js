import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const Profile = () => {
  const classes=useStyles()
    const [student,setStudent]=useState('')
    const [details,setDetails]=useState('')
    useEffect(() =>{
        getProfile()
    }, [])
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

    
    return (
        <div>
         <Navbar/>
          <main>
          <Typography>Profile</Typography>
            <Typography>Name: {details.fullname}</Typography>
            <Typography>roll no: {details.rollno}</Typography>
          </main>
        </div>
        
    )
}
export default Profile
