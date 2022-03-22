const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 5000
app.use(express.json())

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