import React, { useState , useEffect} from "react";

const Form = ({addTodo, edit,updateTodo}) => {
  
 

  
   
  const [text , setText] = useState("")

  const handleSubmit = (e) => {
     e.preventDefault()
     if (edit.isEdit){
      updateTodo(edit.todo.id, text)
     } else{
      addTodo(text)
     }
     
     setText("")

  }
  useEffect(()=>{
    setText(edit.todo.text)
  },[edit] )

    return(
        <form 
        className="flex gap-4  w-full"
        onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Any Task Here"
        className="w-full outline-1 p-1 rounded"
        value={text}
        onChange={e => setText(e.target.value) }
        required
       
      />
      <button className="bg-green-500 text-white p-2 w-sm rounded " type="submit">
        Save Todo
      </button>
    </form>
    )
}
export default Form;