
import './App.css';
import ToDoItems from "./components/toDoItems";
import React, { Component, useState } from 'react';
import axios from 'axios';



function App() {

  const [clear, setClear] = useState(false)


  async function clearHandler() {

   let test = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
    })

    console.log(test.data);
  }

  return (

    <div className='mainContainer'>
      <div className="App">
        <h1 style={{ margin: "0" }}>Todo App</h1>
        <ToDoItems clearVal={clear} />
      </div>
      <div className="footer">
        <p>Click To Erase All Todo</p>
        <button onClick={clearHandler}>Clear All</button>
      </div>
    </div>
  );

}

export default App

