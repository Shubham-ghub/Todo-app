import React from "react";

const ListItem = ({todo, removeTodo, editTodo}) => {

   


    return(
        <li className="flex  justify-between     flex-row p-2 border-2 border-gray-200 ">
            
            <span> 
                
                <h3 className="text-xl" > {todo.text}</h3>
            </span>
           
            <span >
                <button onClick= {() => editTodo(todo) }className="bg-yellow-400 p-1 rounded m-1   ">Edit </button>
                <button onClick={()=> {removeTodo(todo.id)}} className="bg-red-400 p-1 rounded m-1 "> Delete</button>
            </span>
        </li>
    )
}

export default ListItem;
