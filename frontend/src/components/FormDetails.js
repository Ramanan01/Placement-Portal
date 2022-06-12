import React,{useEffect,useState} from 'react'
import {useLinkClickHandler, useParams} from 'react-router-dom'
import Navbarorg from './Navbarorg'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useNavigate} from 'react-router-dom'
import OrgTemplate from './OrgTemplate';

const FormDetails = ({match}) => {
    const navigate=useNavigate()
    const {formid}=useParams()
    const [rows,setRows]=useState([])
    const [blank,setBlank]=useState(false)
    useEffect(() =>{
        fetchRegistredList()
        
    },[])
    useEffect(() => {
        const company = JSON.parse(localStorage.getItem("company"))
        if(!company){
          navigate('/')
        }
      })
    const fetchRegistredList=async()=>{
        console.log(formid)
        const res= await fetch("/registeredlist",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                formid:formid
            })
          })
          const data=await res.json();
          if((data.list).length===0)
          {
            setBlank(true)
          }
          setRows(data.list)
          console.log(data.list)
    }
    if(blank==true)
    {
      navigate('/NoForm')
    }
    if(rows.length===0){
        return(
          <div
          style={{ display:'flex',justifyContent: 'center',alignItems: 'center',height:'100vh',backgroundColor:'#F9E4B7',color:'#35281E'}}
          >
            <CircularProgress size={80} style={{color:"#35281E"}}/>
          </div>
        )
      }
  return (
    <div style={{backgroundColor: '#F9E4B7', fontFamily: 'Fira Sans Condensed',height:'100vh'}}>
        <OrgTemplate></OrgTemplate>
        <br/>
        <br/>
        <br/>
        <br/>

        <TableContainer component={Paper} style={{backgroundColor:'#FF7F50'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
            <TableRow>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}}><b>Name</b></TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>Email</b></TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>Phone No</b>&nbsp;</TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>Department</b>&nbsp;</TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>10th</b>&nbsp;</TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>12th</b>&nbsp;</TableCell>
                <TableCell style={{fontFamily: 'Fira Sans Condensed',fontSize: '20px'}} align="right"><b>CGPA</b>&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.rollno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" style={{fontFamily: 'Fira Sans Condensed'}}>
                    {row.fullname}
                </TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.email}</TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.phone}</TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.dept}</TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.tenth}</TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.twelfth}</TableCell>
                <TableCell align="right" style={{fontFamily: 'Fira Sans Condensed',fontSize: '15px'}}>{row.CGPA}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default FormDetails