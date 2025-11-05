import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(process.env.PORT, async (err)=>{
  if(err){
    console.log('Error starting Application..!');
  }
  console.log(`Application started at Port : ${process.env.PORT}`);

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Mongo Connected..!');
  } catch (error) {
    console.error('Error : ', err);
  }
  
  // mongoose.connect(process.env.DB_URL, ()=> {
  //   console.log('DB Connected');
  // }, (err)=>{
  //   console.log('Not able to connect to the DB', err);
  // })
});