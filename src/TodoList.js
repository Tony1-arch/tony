import React ,{useContext}from 'react'
import {TodoContext} from './context/TodoState'

const Todolist= () => {
    const {todos,removeTodo} = useContext(TodoContext);
  return   <div>
           <h2>ToDos</h2>
            {todos.map((todo,index) => (
            <li key={index}>
                
             {todo} 
             <button type='submit' onClick={()=> removeTodo(index)}>x</button>
             </li>
             
              )  )}
    </div>
  
}

export default Todolist;