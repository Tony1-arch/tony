import React from 'react'
import TodoForm from './TodoForm';
import Todolist from './TodoList';
import News from './News';
import './App.css';

function App() {
  return (
    <div className="App">
     <TodoForm/>
     <Todolist/>
     <News/>
    </div>
  );
}

export default App;
