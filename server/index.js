const mysql = require('mysql2');
const express =require('express');
// const { request } = require('http');
// const { response } = require('express');
// const { request } = require('http');
const app = express();


// create the connection to database


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo'
  });
// second
  connection.connect((err) => {
      if(err){
          console.log(err);
          process.exit();
      } else {
          console.log("database connected")
      }
  });

app.get('/get_todo' ,(request, response) =>{
const query = "SELECT * FROM list";
connection.query(query,(error, result) => {
    if(error){
        console.log(error);
    } else {
        response.send(result);


    }
})
}) 

// third

 
// fourth
app.listen(5000, () => {console.log('app is running at 5000')});