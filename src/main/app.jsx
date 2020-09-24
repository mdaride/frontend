//import logo from './logo.svg';
//import './App.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'


import React from 'react'

export default props  =>
  <div>
    <Menu />
    <Todo />
    <About />
  </div>

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

