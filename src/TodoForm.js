
import React,{useState,useContext} from 'react'
import {TodoContext} from './context/TodoState'
const TodoForm = () => {
    const {todos,addTodo} = useContext(TodoContext);
    
    const[todoItems, setTodoItems] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todoItems){
            return;
        }
        addTodo(todoItems);
        setTodoItems('')
        console.log('new todos', todoItems)
    };
  return <div>

    <p>We have {todos.length} todos</p>
    <form onSubmit={handleSubmit}>
    <input type='text' value={todoItems} 
    onChange={(e) => setTodoItems(e.target.value)}/>
    <button type='submit'>Submit</button>
   </form>

    </div>;
  
}
export default TodoForm;