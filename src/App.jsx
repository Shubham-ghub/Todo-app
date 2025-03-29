import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  let projectName = "Ultimate Todo App"


  const [todos, setTodos] = useState([

    { id: 1, text: "Code Everyday" },
   

  ]);

  const [edit, setEdit] = useState({
    todo:{},
    isEdit: false,
  })


  const removeTodo = (id)=>{
   setTodos (todos.filter ((todo)=> todo.id !== id))
    
  }
 const editTodo = (oldTodo) => {
  setEdit({
    todo: oldTodo,
    isEdit:true,
  })
  
}


const addTodo = (text) => {
  setTodos([{id: crypto.randomUUID(),text:text}, ...todos])
  
}
const updateTodo = (oldid, newText)=>{{
  setTodos(
    todos.map((item)=> {
      if (item.id === oldid){
        return{id:oldid , text: newText}
      }else{
        return item
      }
    })
  )
  setEdit ({todo: {}, isEdit: false})
  
}}






    return (
      <div>
        <Navbar projectName={projectName}  />
        <div className= " p-5">
          <Form addTodo={addTodo}edit={edit} updateTodo={updateTodo}/>
          <ListGroup todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
      </div>
    );
  
}
  export default App;