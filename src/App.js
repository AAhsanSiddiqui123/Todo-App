import logo from './logo.svg';
import './App.css';
import ToDoItems from "./components/toDoItems"

function App() {
  return (
    <div className="App">
      <h1 style={{margin: "0"}}>Todo App</h1>
      <ToDoItems />
    </div>
  );
}

export default App;
