const { response} = require('express')
const express = require('express')
const {MongoClient}=require('mongodb')
const cors=require('cors')
const { add } = require('nodemon/lib/rules')
const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://amdin:admin123@cluster0.ncgjhwx.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(uri);
client.connect();
const db=client.db("s8");
const col=db.collection("c207");





app.post('/',(request,response)=>{
  console.log(request.body)
  col.insertOne(request.body)
  response.send("saved succesfully")
})

app.get('/check',(request,response)=>{
  console.log(request.query)
  async function find(){
    try{
      const result=await col.findOne({email:request.query.un})
      console.log(result) 
      if(result===null){
        response.send("fail---1")
      }
      else{
        if(result.password===request.query.pw)
        {
          response.send("pass")
        }
        else{
          response.send("fail--1")
        }
        
      }
    }
    finally{

    }
    
  }
  find().catch(console.dir)
  



})

app.listen(8081)
//localhost:8081
console.log("server started")