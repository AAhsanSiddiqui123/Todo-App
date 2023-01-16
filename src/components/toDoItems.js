import React, { Fragment, Component } from 'react';
import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';

export default class ToDoItems extends Component {

  state = {
    inputChange: "",
    inputArray: [],
    updatedId: "",
    isUpdate: false
  }

  changeHandler = (value) => {
    this.setState({ inputChange: value.target.value })
  }

  /////////////////////////////////////////////////////////submit///////////////////////////////////////////////
  submitHandler = (e) => {
    e.preventDefault();

    let test = this.state.inputArray.find((curr) => {
      return curr.id === this.state.updatedId
    })

    if (test) {
      test.value = this.state.inputChange 
      this.setState({ updatedId: '' })

    } else if (this.state.inputChange) {
      this.setState({ isUpdate: false })
      this.state.inputArray.push({
        value: this.state.inputChange,
        id: Math.random()
      })
    } else {
      return
    }
    this.setState({ isUpdate: false })
    this.setState({ inputChange: "" })
  }

  /////////////////////////////////////////////////////////Delete///////////////////////////////////////////////

  deleteHandler = (id) => {
    let newArray = this.state.inputArray.filter((curr) => {
      return curr.id !== id;
    })

    this.setState({ inputArray: newArray })
  }

  /////////////////////////////////////////////////////////update///////////////////////////////////////////////

  toggle =  true;
  updateHandler = (id) => {
    if(this.toggle){
      this.toggle = false;
      this.setState({ updatedId: '' })
    }else{
      this.toggle = true;
      this.setState({ updatedId: id })
    }
    this.setState({ isUpdate: this.toggle })
  }


  componentDidUpdate(prevProps) {
    if (prevProps.clearVal !== this.props.clearVal) {
      this.setState({ inputArray: [] })
      this.setState({ inputChange: "" })
    }
  }

  render() {
    return (
      <Fragment>

        <div className={style.mainContainer}>
          <form onSubmit={this.submitHandler}>
            <div className={style.inputDiv}>
              {this.state.isUpdate ? <Form
                val={this.state.inputChange}
                fun={this.changeHandler}
                sign="/"
              /> : <Form
                val={this.state.inputChange}
                fun={this.changeHandler}
                sign="+"
              />}

            </div>
          </form>
        </div>

        <ul>
          {
            this.state.inputArray.map((curr) => {
              return <List
                value={curr.value}
                deleteFun={this.deleteHandler}
                updateFun={this.updateHandler}
                id={curr.id}
                key={curr.id}
              />
            })
          }
        </ul>
      </Fragment>

    )

  }

}