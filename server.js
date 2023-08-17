import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import axios from 'axios'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const PORT = 3005;
app.use(cors())



const connection = mysql.createConnection({
    
  host: '159.89.174.171',
  user: 'dev',
  password: 'password',
  database: 'DDPI'
  });
let dataArray = []

  let getData = ()=>{

  app.get('/api/fetchDataFromProcedure', (req, res) => {
    const query = 'CALL getddpireport()'; // Replace with your procedure name
    connection.connect((err,result)=>{

      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error fetching data:', error);
          res.status(500).json([]);
        } else {
          res.json(results[0]);
      
        }  
      });
    })
   
  });}

getData()


app.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`)})

