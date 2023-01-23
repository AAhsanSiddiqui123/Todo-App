import React, { Fragment, useState, useEffect } from 'react';
import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';


function ToDoItems(props) {

  const [inputChange, setInput] = useState("");
  const [inputArray, setinputArray] = useState([]);
  const [updatedId, setupdatedId] = useState("");
  const [isEdit, setIsEdit] = useState(false);


  function changeHandler(value) {
    setInput(value.target.value)
  }


  /////////////////////////////////////////////////////////submit///////////////////////////////////////////////

  function submitHandler(e) {
    e.preventDefault();

    let indexdValue = inputArray.findIndex((curr) => {
      return curr.id === updatedId
    })

    if (updatedId) {
      let obj = {
        ...inputArray[indexdValue],
        value: inputChange
      }
      let updatedArray = [...inputArray]
      updatedArray[indexdValue] = obj;

      setinputArray(updatedArray)
      setupdatedId('')

    } else if (inputChange) {
      setIsEdit(false)

      setinputArray([...inputArray,{
        value: inputChange,
        id: Math.random()
      }])

    } else {
      return
    }
    setIsEdit(false)
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

  function updateHandler(id) {
    if (isEdit) {
      setIsEdit(!isEdit)
      setupdatedId('')
    } else {
      setIsEdit(!isEdit)
      setupdatedId(id)
    }
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
            {<Form
              value={inputChange}
              changeHandler={changeHandler}
              edit={isEdit}
            /> }
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


