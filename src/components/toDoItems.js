import React, { Fragment, useState, useEffect } from 'react';
import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';


function ToDoItems(props) {

  const [inputChange, setInput] = useState("");
  const [inputArray, setinputArray] = useState([]);
  const [updatedId, setupdatedId] = useState("");
  const [isUpdate, setisUpdate] = useState(false);


  function changeHandler(value) {
    setInput(value.target.value)
  }


  /////////////////////////////////////////////////////////submit///////////////////////////////////////////////

  function submitHandler(e) {
    e.preventDefault();

    let valueFound = inputArray.find((curr) => {
      return curr.id === updatedId
    })

    if (valueFound) {
      valueFound.value = inputChange
      setupdatedId("")

    } else if (inputChange) {
      setisUpdate(false)

      setinputArray((pre)=>{

        return pre.concat({
          value: inputChange,
          id: Math.random()
        })
      })

    } else {
      return
    }
    setisUpdate(false)
    setInput()
  }

  /////////////////////////////////////////////////////////Delete///////////////////////////////////////////////


  function deleteHandler(id) {
    let newArray = inputArray.filter((curr) => {
      return curr.id !== id;
    })

    setinputArray(newArray)
  }


  /////////////////////////////////////////////////////////update///////////////////////////////////////////////

  let toggle = true;
  function updateHandler(id) {
    if (toggle) {
      toggle = false;
      setupdatedId('')
    } else {
      toggle = true;
      setupdatedId(id)
    }
    setisUpdate(toggle)
  }

  useEffect(() => {
    setinputArray([])
    setInput("")
  }, [props])

  return (
    <Fragment>

      <div className={style.mainContainer}>
        <form onSubmit={submitHandler}>
          <div className={style.inputDiv}>
            {isUpdate ? <Form
              val={inputChange}
              fun={changeHandler}
              sign="/"
            /> : <Form
              val={inputChange}
              fun={changeHandler}
              sign="+"
            />}
          </div>
        </form>
      </div>

      <ul>
        {
          inputArray.map((curr) => {
            return <List
              value={curr.value}
              deleteFun={deleteHandler}
              updateFun={updateHandler}
              id={curr.id}
              key={curr.id}
            />
          })
        }
      </ul>

    </Fragment>

  )

}

export default ToDoItems


