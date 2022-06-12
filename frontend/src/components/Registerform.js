import React,{useState,useEffect} from 'react'
import Navbarorg from './Navbarorg'
import {useNavigate} from 'react-router-dom'
import OrgTemplate from './OrgTemplate'

const headerstyle={
  fontFamily: 'Fira Sans Condensed', 
  textAlign:'center',
  backgroundColor: 'black',
  color:'#FFFFF0',
  fontweight: 300,
  border: '1px black',
  borderstyle:'solid',
  fontSize: 40,
  padding: 10,
  borderradius: 20
 };

const  Registerform= ()=> {
  const navigate =useNavigate()
  const [role,setRole] = useState('')
  const [description,setDescription] = useState('')
  const [minCGPA,setMinCGPA] = useState(0)
  const [minTenth,setMinTenth] = useState(0)
  const [minTwelfth,setMinTwelfth] = useState(0)
  const [checkedState, setCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [selectedDepts,setSelectedDepts] = useState([])
  useEffect(() => {
    const company = JSON.parse(localStorage.getItem("company"))
    if(!company){
      navigate('/')
    }
  })
  const depts = [
    { value: 'IT',key:0 },
    { value: 'CSE',key:1 },
    { value: 'ECE',key:2 },
    { value: 'EEE',key:3 },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const company = JSON.parse(localStorage.getItem('company'))
    const companyName=company.companyName
    console.log(companyName,role,description,minCGPA,minTenth,minTwelfth,selectedDepts)
    fetch("/newform",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            companyName,
            role,
            description,
            minCGPA,
            minTenth,
            minTwelfth,
            selectedDepts
        })
      })
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    let tempDepts=[];
    updatedCheckedState.map((item, index) =>{
      if(item===true){
        tempDepts=[...tempDepts,depts[index].value]
      }
    })
    setSelectedDepts(tempDepts)
  };

  return (
    <div style={{backgroundColor:'turquoise', height:'725px'}}>
      <OrgTemplate/>
      <br/>
      <div>
      <b style={headerstyle}>FOR HIRING</b>
    </div>
    <br/>
    <br/>
    <div style={{border: '1px solid black',marginLeft:'500px',backgroundColor:'black',width:'500px'}}>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <label>ROLE : </label>
            <input name="Role" type="text" value={role} onChange={(e)=>setRole(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Role"/>
            </div>
            <br/>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <label className="text-white text-lg font-semibold">DESCRIPTION: </label>
                  <input name="Description" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Description"/>
            </div>
           <br/>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <label className="text-white text-lg font-semibold">MIN CGPA : </label>
                  <input name="MinimumCGPA" type="number" value={minCGPA} onChange={(e)=>setMinCGPA(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Minimum CGPA"/>
            </div>
            <br/>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <label className="text-white text-lg font-semibold">MIN TENTH MARKS: </label>
                  <input name="MinimumTenth" type="number" value={minTenth} onChange={(e)=>setMinTenth(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Minimum Tenth Mark"/>
            </div>
              <br/>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <label className="text-white text-lg font-semibold">MIN TWELFTH MARKS: </label>
                  <input name="MinimumTwelfth" type="number" value={minTwelfth} onChange={(e)=>setMinTwelfth(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Minimum Twelfth Mark"/>
            </div>
               <br/>
            <div style={{marginLeft:'10px',textAlign:'left',fontFamily: 'Fira Sans Condensed',color:'white',fontSize:25,fontWeight:25}}>
            <div className="flex flex-col space-y-3 w-full my-3">
                <label className="text-white text-lg font-semibold">Choose Eligible Departments : </label>
                {depts.map((dept) => {
                  return (
                    <div key={dept.key}>
                        <div className="flex space-x-3 text-white items-center">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${dept.key}`}
                            name={dept.value}
                            value={dept.value}
                            checked={checkedState[dept.key]}
                            onChange={() => handleOnChange(dept.key)}
                          />
                          <label htmlFor={`custom-checkbox-${dept.key}`}>{dept.value}</label>
                        </div>
                    </div>
                  );
                })}
                </div>
            </div>
                 <br/>
                  <div className="w-full flex justify-center">
                  <button onClick={(e)=>handleClick(e)} style={{ backgroundColor: "black",
                 color: "white",
                 "&:hover": {
                   backgroundColor: "#20B2AA",
                 }}}> LOGIN </button>
                    <br/>
                </div>
                <br/>
                {/*<div className="w-full flex justify-center">
                  <button onClick={(e)=>handleClick(e)} className="mt-8 w-2/3 py-2 px-4 text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Login
                  </button>
              </div>*/}


    </div>
    </div>
  );
  }
export default Registerform