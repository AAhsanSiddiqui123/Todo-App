
import './App.css';
import ToDoItems from "./components/toDoItems";
import React, {  useState } from 'react';




function App() {

  const [clear, setClear] = useState(false)
  function clearHandler() {
    setClear(!clear)
  }


return (

  <div className='mainContainer'>
    <div className="App">
      <h1 style={{ margin: "0" }}>Todo App</h1>
      <ToDoItems clearVal={clear} />
    </div>
    <div className="footer">
       
      <button onClick={clearHandler}>Clear All</button>
    </div>
  </div>
);

}

export default App

