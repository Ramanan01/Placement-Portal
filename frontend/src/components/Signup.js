import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';

const bgUrl = {
  background: `url(https://i.pinimg.com/736x/35/1a/e7/351ae7b78bb793c6462884e947df51b2.jpg)`,
  height: "200vh",
  backgroundAttachment: 'local',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
 
};

 const drop={
    width:"10vh"
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

function Signup() {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [dept, setDept] = useState('')
    const [tenth, setTenth] = useState('')
    const [twelfth, setTwelfth] = useState('')
    const [phone, setPhone] = useState('')
    const [cgpa, setCgpa] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [rollno, setRollno] = useState('')
    // const [invalidEmail, setInvalidEmail] = useState(false)
    const [error, setError] = useState('')
    const [successShow, setSuccessShow] = useState('')

    // useEffect(()=>{
    //   console.log(name,email,password)
    // },[name,password,email])

    const submitData = (e) =>{
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        setShowAlert(true)
        setError("Enter a valid Email")
        setTimeout(()=>setShowAlert(false),2000);
        return;
      }
      e.preventDefault()
      
      fetch("/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           
            email,
            password,
            name,
            rollno,
            dept,
            tenth,
            twelfth,
            cgpa,
            phone
        })
      })
      .then(res=>res.json())
        .then(data=>{
          if(data.errMess){
            setError(data.errMess)
            setShowAlert(true); 
            setTimeout(()=>setShowAlert(false),2000);
          }
          else{
            setSuccessShow(true)
            setTimeout(()=>setSuccessShow(false),2000);
          }
        })
    }

    const classes = useStyles()
    return (
        <div style={bgUrl}>
            <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}>
                AU Placements
                </Typography>
                <div className={classes.buttons}>
                <Link to="/login" className={classes.linkRouter} textDecor>
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
            {
              successShow?
              <Alert severity="success">
                User registered successfully!
              </Alert>
              :null
            }
            <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                <Typography variant="caption" className={classes.heading}>
                    SIGN UP
                </Typography>
               
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="my-email">Enter Email address</InputLabel>
                    <Input id="my-email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter Email" type="email" id="my-email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <TextField id="pass" label="Enter Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter Password" type="password" id="pass" value={password} onChange={(e)=>setPassword(e.target.value)} aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter Full Name" type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter Roll No:" type="text" id="rollno" value={rollno} onChange={(e)=>setRollno(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl variant="standard">
                  <InputLabel>Dept</InputLabel>
                  <Select style={drop}
      
                    value={dept}
                    onChange={(e)=>{
                      setDept(e.target.value)
                      console.log(dept)
                    }}
                    label="Dept"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"IT"}>IT</MenuItem>
                    <MenuItem value={"CSE"}>CSE</MenuItem>
                    <MenuItem value={"ECE"}>ECE</MenuItem>
                    <MenuItem value={"EEE"}>EEE</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter 10th marks" type="number" id="10th" value={tenth} onChange={(e)=>setTenth(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter 12th marks" type="number" id="12th" value={twelfth} onChange={(e)=>setTwelfth(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter CGPA" type="number" id="cgpa" value={cgpa} onChange={(e)=>setCgpa(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.formElement}>
                    {/* <InputLabel htmlFor="name">Enter Name</InputLabel>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="my-helper-text" /> */}
                    <CssTextField label="Enter Contact No:" type="text" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <Button className={classes.formButton} variant="contained" color="primary" onClick={submitData}>
                    Sign Up   
                </Button>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default Signup