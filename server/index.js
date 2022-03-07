const mysql = require('mysql2');
const express =require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
// const { request } = require('http');
// const { response } = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json())
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
connection.query(query, (err, result) => {
    response.status(200).send(result);
})
}) 

// third
app.post('/add_task', (request,response) => {
    const task = request.body.task;
const query=`INSERT INTO list (task) VALUES ('${task}')`;
connection.query(query,(error, result) => {
    if(error){
        console.log(error);
        response.status(500).send({
            success:false,
            msg: error, 
        });
    } else {
if(result.affectedRows){
    response.status(200).send({
            success:true,
            msg: "task added", 
        });
} else {
    response.status(400).send({
            success:false,
            msg: "task not added", 
        });
}
}
})
}) 
 

app.post('/update_task', (request,response) => {
    const id = request.body.id;
    const task = request.body.task;
    const query = `UPDATE list SET task = '${task}' WHERE id = ${id}`;
    connection.query(query, (err , result) => {
        if(err){
            console.log(err);
            response.status(500).send({
                success:false,
                msg: err
            });
        }else{
            if(result.affectedRows===1){
                response.status(200).send({
                    success:true,
                    msg: "task updated"
                })
            }else{
                response.send(400).send({
                success:false,
                msg: 'error  to update'
            });
            }
        }
    })
});

app.post('/done_task', (request,response) => {
    const id = request.body.id;
    const is_done = request.body.is_done;
    const query = `UPDATE list SET is_done = '${is_done}' WHERE id = ${id}`;
    connection.query(query, (err , result) => {
        if(err){
            console.log(err);
            response.status(500).send({
                success:false,
                msg: err
            });
        }else{
            if(result.affectedRows===1){
                response.status(200).send({
                    success:true,
                    msg: "task Done"
                })
            }else{
                response.send(400).send({
                success:false,
                msg: 'error  to change task status'
            });
            }
        }
    })
});

app.post('/delete_task', (request,response) => {
    const id = request.body.id;
    const query = `DELETE FROM list WHERE id = ${id}`;
    connection.query(query, (err , result) => {
        if(err){
            console.log(err);
            response.status(500).send({
                success:false,
                msg: err
            });
        }else{
            if(result.affectedRows===1){
                response.status(200).send({
                    success:true,
                    msg: "task deleted"
                })
            }else{
                response.send(400).send({
                success:false,
                msg: 'error  to delete task'
            });
            }
        }
    })
})
// fourth
app.listen(5000, () => {console.log('app is running at 5000')});