import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({todos , removeTodo , editTodo }) => {
  return (
    <ul className="my-4">
     { todos.map ((todo) =>{
            return <ListItem key={todo.id} editTodo={editTodo} todo={todo} removeTodo={removeTodo}/>
        }
    )}
    
    </ul>
  );
};

export default ListGroup;
