import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import {useNavigate} from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';

const bgUrl = {
  background: `url(https://i.pinimg.com/736x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg)`,
  height: "100vh",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
 
};

const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: '40%',
    height: "80%",
  },
  toolbar: {
    backgroundColor: "black",
  },
  linkRouter:{
    textDecoration: 'none',
  },
  navButton: {
    backgroundColor: "Turquoise",
      color: "black",
      "&:hover": {
        backgroundColor: "#20B2AA",
      },
      fontFamily: 'Fira Sans Condensed'
  },
  card: {
    width: "25%",
    borderRadius: "15px",
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    boxShadow: "2px 2px 4px #b48648",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "12%",
  },
  formElement: {
    margin: "10px",
    width: "75%",
    // "&:focus": {
    //   color: "#b7410e",
    // },
  },
  formButton: {
    margin: "15px",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#20B2AA",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    flexGrow: 1,
    textAlign:'left',
    fontFamily:'Fira Sans Condensed',
    color:'#FFFFF0'
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "12vw",
  },
  heading:{
    fontSize:'2rem',
    fontWeight:'bold',
    fontFamily: 'Fira Sans Condensed'
  },
  inputStyles: {
    color:'black',
    "&:after":{
      borderColor:'#35281E',
    },
    "&:before":{
      borderColor:'#35281E',
    },
  },
  inputLabel: {
    "&:after":{
      color:'#35281E',
    },
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#35281E',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#35281E',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#35281E',
    },
  },
})(TextField);

function Login() {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const loginData = (e) => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      setShowAlert(true)
      setError("Enter a valid Email")
      setTimeout(()=>setShowAlert(false),2000);
      return;
    }
    e.preventDefault()
    console.log('About to send credentials')
    fetch("/login",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          password,
          email,
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.errMess) {
          setError(data.errMess)
          setShowAlert(true); 
          setTimeout(()=>setShowAlert(false),2000);
      }
      else{
          console.log('Logged In')
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        navigate('/SDashboard')
      }
    })
  }
    const classes = useStyles()
    return (
      <div className={classes.root} style={bgUrl}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" className={classes.title}>
              AU Placements
            </Typography>
            <div className={classes.buttons}>
              <Link to="/login" className={classes.linkRouter}>
                <Button variant="contained" className={classes.navButton}>
                  LOGIN
                </Button>
              </Link>
              <Link to="/signup" className={classes.linkRouter}>
                <Button variant="contained" className={classes.navButton}>
                  SIGNUP
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        {
          showAlert?
          <Alert severity="error">
            {error}
          </Alert>
          :null
        }
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="caption" className={classes.heading}>
                LOGIN
              </Typography>
              <FormControl className={classes.formElement}>
                {/* <InputLabel style={{color:'#35281E'}} htmlFor="my-email">Email address</InputLabel>
                <Input className={classes.inputStyles} id="my-email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="my-helper-text" /> */}
                  <CssTextField  
                  id="email" label="Enter Email" type="email" 
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                  aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl className={classes.formElement}>
                <CssTextField 
                id="pass" label="Enter Password" type="password" 
                value={password} onChange={(e)=>setPassword(e.target.value)}
                aria-describedby="my-helper-text" />
              </FormControl>
              <Button className={classes.formButton} variant="contained" color="primary" onClick={loginData}>
                Login   
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}


export default Login