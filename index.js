
const express = require('express');
const app = express()
const router = express.Router()
const mongoose = require('mongoose')
const Student = require('./models/Student')
app.use(express.json())
const PORT = 5000
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

app.listen(PORT,()=>{
    console.log("Server is running",PORT);
})

const uri = "mongodb+srv://Ramanan:rammv%40123@placementdb.a9jku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))





app.post("/signup",(req,res) => {
    console.log(req.body)
    const { email,
            password,
            name,
            rollno,
            dept,
            tenth,
            twelfth,
            cgpa,
            phone} = req.body
    if(!email || !name || !password || !rollno || !dept || !tenth || !twelfth || !cgpa || !phone){
        res.statusCode = 422
        return res.json({errMess:"All fields have not been filled"})
    }
    bcrypt.hash(password,12)
    .then((hashedpass) => {
        Student.findOne({email: email})
        .then((saveduser)=>{
            if(saveduser){
                res.statusCode = 422
                return res.json({errMess: "User already exists"})
            }
            const student = new Student({
                email: email, password: hashedpass, fullname: name, rollno: rollno, dept: dept, tenth: tenth, twelfth: twelfth, CGPA: cgpa, phone: phone
            })
            student.save()
            .then((sample)=> res.json("User Created Successfully"))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


app.post('/login',(req,res)=>{
    console.log('Login Request received')
    const {email,password} = req.body
    if(!email || !password){
        res.statusCode = 422
        return res.json({errMess:"All fields have not been filled"})
    }
    Student.findOne({email: email})
    .then((saveduser)=>{
        if(!saveduser){
            res.statusCode = 422
            return res.json({errMess: "Student does not exist"})
        }
        bcrypt.compare(password,saveduser.password)
        .then((match)=>{
            if(match){
                const token = jwt.sign({_id:saveduser},'skayy')
                const {_id,fullname,email} = saveduser
                res.json({token,user:{_id,fullname,email}})
            }
            else{
                res.statusCode = 422
                return res.json({errMess: "Incorrect Password"})
            }
        })
        .catch(err =>console.log(err))
    })
    .catch(err =>console.log(err))
})