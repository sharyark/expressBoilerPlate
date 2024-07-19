import { Todo } from "../models/todo.js";

function index(req, res) {
// it return promis
 Todo.find()
 .then(todos => {
  console.log("------",todos)
  res.render('todos/index',{todos : todos});
  
 })
 .catch(error => {
  console.log(error)
  res.redircet('/')
 })



    }

  export {index}
