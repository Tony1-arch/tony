import React,{useState,createContext,useEffect} from 'react'
export const TodoContext = createContext()
const todoStorage = JSON.parse(localStorage.getItem('todos')||'')
const TodoState = ({children}) => {
    const [todos,setTodos] = useState(todoStorage)
useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos))
},[todos])
    const addTodo = (newTodo)=> {
        setTodos([...todos,newTodo]) ;       
    };

    const removeTodo = (todoIndex) => {
    const filteredTodos = todos.filter(( _, index) => index !== todoIndex)
    setTodos(filteredTodos)
    };

const todoValues = {
    todos,
    addTodo,
    removeTodo
};
  return (
    
      <TodoContext.Provider value={todoValues}>
       {children}
      </TodoContext.Provider>
    
   );
};

export default TodoState;