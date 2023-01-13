import './App.css';
import ToDoItems from "./components/toDoItems";
import React, {Component } from 'react';


export default class App extends Component{

  constructor(){
    super()
    this.state = {
      clear: false
    }
  }


  clearHandler = () =>{
    this.setState({clear: !this.state.clear})
  }

  render(){

    return (
      
      <div className='mainContainer'>
      <div className="App">
        <h1 style={{ margin: "0" }}>Todo App</h1>
        <ToDoItems clearVal={this.state.clear} />
      </div>
        <div className="footer">
          <p>Click To Erase All Todo</p>
          <button onClick={this.clearHandler}>Clear All</button>
        </div>
    </div>
  );
}
}





