import React, { useEffect, useState } from "react";

const ListItem = ({todo, removeTodo, editTodo}) => {

   
    

        const [isChecked , setIsChecked ] = useState(false)
    
  const   handleChange = (e)=>{
        setIsChecked(!isChecked)
        }
    
    
  

    return(

        <li className="flex justify-between flex-row p-2 border-2 border-gray-200 ">
            
            <span> 
                
                <h3 className={`text-xl ${isChecked ? "line-through" : ""}`} > {todo.text}</h3>
            </span>
           
            <span >

               
                <input type="checkbox"  value={isChecked} onChange={handleChange} />
                <label>{isChecked ? "Checked ✅" : "Unchecked ❌"}</label>
              
               
              
                
                 
                <button onClick= {() => editTodo(todo) }className="bg-yellow-400 p-1 rounded m-1   ">Edit </button>
                <button onClick={()=> {removeTodo(todo.id)}} className="bg-red-400 p-1 rounded m-1 "> Delete</button>
            </span>
        </li>
    )
}

export default ListItem;
