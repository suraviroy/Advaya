const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require("./model/studentSchema")
// const DB = 'mongodb+srv://suravi:Suravi@1509@cluster0.9w0t9s1.mongodb.net/Advaya'
//mongodb+srv://suravi:<password>@cluster0.9w0t9s1.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect(DB, {
//   useNewUrlParser : true,
//   useCreateIndex : true,
//   useUnifiedTopology : true,
//   useFindAndModify :false 
// }).then(() =>  {
//   console.log('db connected');
// }).catch((err) => console.log(`connection not`));

require("dotenv").config();

const connectionString = `mongodb+srv://rsuravi447:PtCLVT7Q0Xuk3khG@cluster1.wgel2hb.mongodb.net/adv?retryWrites=true&w=majority`;
mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!!!"))
  .catch((error) => {
    console.log(error);
  });


server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async (req, res) => {
  //console.log('server started')
  const name = req.body.name;
  const clg = req.body.institution;
  const email = req.body.email;
  const studentid = req.body.studentId;
  const department = req.body.department;
  const phone = req.body.phoneNumber;
  const finduser = await Student.findOne({ studentid: studentid });
  if (finduser) {
    return res.status(400).json({ message: "user already exist" });
  }
  else {

    const newuser=await Student.create({name,clg,email,studentid,department,phone});
    //console.log(req.body);
    console.log(newuser)
    //res.json(req.body)
    res.status(200).json({ message: "fetch", data: newuser })
  }
})

server.post('/demo1', async (req, res) => {
  //console.log('server started')
  
  const studentid = req.body.data;
  const skill= req.body.newSkill;
  const finduser = await Student.updateOne({ studentid: studentid },{skills:skill});
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
})


server.post('/demo2', async (req, res) => {
  //console.log('server started')
  
  const studentid = req.body.data;
  const badge= req.body.badge;
  const finduser = await Student.updateOne({ studentid: studentid },{badge:badge});
  if (finduser) {
    return res.status(200).json({ message: "updated" });
  }
  else {

    res.status(400).json({ message: "bad req"})
  }
})


server.get('/demo',async (req,res)=>{
  
    const docs = await Student.find({});
    //console.log(req.docs)
    //res.json(docs)
    res.send({data : docs})
})

server.listen(8081, () => {
  console.log('server started')
})
