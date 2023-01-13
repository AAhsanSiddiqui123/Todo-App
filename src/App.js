
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


 

  render(){

    return (
      
      <div className='mainContainer'>
     <h1>Ahsan </h1>
    </div>
  );
}
}

