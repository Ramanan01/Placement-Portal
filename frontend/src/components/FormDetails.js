import React,{useEffect,useState} from 'react'
import {useLinkClickHandler, useParams} from 'react-router-dom'
import Navbar from './Navbar'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const FormDetails = ({match}) => {
    const {formid}=useParams()
    const [rows,setRows]=useState([])
    useEffect(() =>{
        fetchRegistredList()
        
    },[])

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
          setRows(data.list)
          console.log(data.list)
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
    <div>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone No&nbsp;(g)</TableCell>
                <TableCell align="right">Department&nbsp;(g)</TableCell>
                <TableCell align="right">10th&nbsp;(g)</TableCell>
                <TableCell align="right">12th&nbsp;(g)</TableCell>
                <TableCell align="right">CGPA&nbsp;(g)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.rollno}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.fullname}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.dept}</TableCell>
                <TableCell align="right">{row.tenth}</TableCell>
                <TableCell align="right">{row.twelfth}</TableCell>
                <TableCell align="right">{row.CGPA}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default FormDetails