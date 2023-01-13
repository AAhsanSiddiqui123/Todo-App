import React, { Fragment, Component } from 'react';
import style from "./toDoItems.module.css";
import List from "./List/List";

export default class ToDoItems extends Component {

  state = {
    inputChange: "",
    inputArray: []
  }

  changeHandler = (value) => {
    this.setState({ inputChange: value.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.inputChange) {
      this.state.inputArray.push({
        value: this.state.inputChange,
        id: Math.random()
      })
    } else {
      return
    }
    this.setState({ inputChange: "" })
  }

  deleteHandler = (id) => {
    let newArray = this.state.inputArray.filter((curr) => {
      return curr.id !== id;
    })

    this.setState({ inputArray: newArray })
  }

  // componentDidMount() {
  //   console.log("didMount");
  // }

  componentDidUpdate(prevProps) {
    if(prevProps.clearVal !== this.props.clearVal){
      this.setState({ inputArray: [] })
      this.setState({ inputChange: ""})
  }
}

  render() {
    return (
      <Fragment>

        <div className={style.mainContainer}>
          <form onSubmit={this.submitHandler}>
            <div className={style.inputDiv}>
              <input value={this.state.inputChange} onChange={this.changeHandler} placeholder="Add Your New Todo" />
              <button type='submit'>+</button>
            </div>
          </form>
        </div>

        <ul>
          {
            this.state.inputArray.map((curr) => {
              return <List
                value={curr.value}
                fun={this.deleteHandler}
                id={curr.id}
                key={Math.random()}
              />
            })
          }
        </ul>
      </Fragment>

    )

  }

}


