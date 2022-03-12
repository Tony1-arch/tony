import React from 'react';
import ReactDOM from 'react-dom';
import TodoState from './context/TodoState';
import NewsState from './context/NewsState';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <TodoState>
      <NewsState>
      <App/>
      </NewsState>
    </TodoState>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital