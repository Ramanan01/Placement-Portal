import React from 'react'
import { useNavigate } from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Grid} from '@material-ui/core';


const Home = () => {
    const navigate = useNavigate()
    const myStyle = {
      color: "black",
      backgroundColor: "#8FBAC8",
      padding: "10px",
      fontFamily: "Times New Roman"
    };
    const headerstyle={
      textAlign:'center',
      fontweight: 600,
      fontFamily: "Times New Roman",
      border: '1px double black',
      borderstyle:'double',
      fontSize: 40,
      padding: 5,
      borderradius: 20
     };
     const capstyle={
      fontSize: 25
     };
     const gridcontainer={
       display:'grid'
     };
     const griditem={
        padding:20
     };
     const para={
        color:"black",
        fontFamily:"Times New Roman",
        fontsize:"20px",
        padding:5,
        border: '2px solid black',
        borderradius: '40px',
        padding: 12,
        borderCollapse: 'collapsed'
     };
     const buttonstyle={
      backgroundColor:'#f44336',
      fontsize:"24px"
     };
     const image={
         width: "40vh" ,
         height: "40vh"
     };
     const navbar= {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "#b7410e",
      },
    };
    const head={
      fontweight:'bold'
    };
     
  return (
    <div style={myStyle}>
       <div>
        <b style={headerstyle}>PORTAL FOR PLACEMENTS</b></div>
        <br></br>
        <h2>Welcome to On-Campus Placements of College of Engineering Guindy</h2>
        <p style={para}>
        Contributing to the educational, economic and social development by
        producing students who are intellectually and technically equipped with well-defined knowledge,
        skills and ethics who are creative thinkers, inspiring leaders and contributing citizens.
        We proudly disseminate information about various employment opportunities in Job sector for our college students.
        </p>
        <div>
            <br></br>
            <br></br>
            <Grid lg={12} item container spacing={4}>
              <Grid item lg={6} xs={6}>
            <Button size="large" variant="outlined" style={navbar} onClick={()=>{
               navigate('\login') 
            }}>Student</Button>
            </Grid>
            <Grid item lg={6} xs={6}>
            <Button size="large" variant="outlined" style={navbar} onClick={()=>{
              navigate('\organization')
            }}>Organization</Button>
            </Grid>
            <Grid item lg={6} xs={6}>
             <img style={image} src="https://images.shiksha.com/mediadata/images/articles/1575364406phpt8SyIy.jpeg"></img>
            </Grid>
            <Grid item lg={6} xs={6}>
             <img style={image} src="https://www.oysterconnect.com/blogs/wp-content/uploads/2019/10/The-Exam-Cram_-How-to-Manage-That-Last-Minute-Prep-Stress_-9-1.png"></img>
            </Grid>
            <Grid item lg={6} xs={6}>
              <p style={para}>Create your Profile and login to access available Training and Job Opportunities with Corporates and firms.</p>
            </Grid>
            <Grid item lg={6} xs={6}>
              <p style={para}>Register your Company/Firm and login to search Candidates for respective designations in your companies.</p>
            </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Home