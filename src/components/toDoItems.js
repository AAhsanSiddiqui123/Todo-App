import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';
import { magageStateAction } from '../Store/manageState';
import { todoActionCreater } from "../Store/todoItemsList";

function ToDoItems(props) {

  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.update.isEdit);
  const updatedId = useSelector((state) => state.update.updatedId);
  const inputArray = useSelector((state) => state.todoReducer.dataArray);

  const [inputChange, setInput] = useState("");

  function changeHandler(value) {
    setInput(value.target.value)
  }

  /////////////////////////////////////////////////////////submit///////////////////////////////////////////////


  function submitHandler(e) {

    dispatch(magageStateAction.formUpdateHandler(false))
    e.preventDefault();

    if (updatedId) {
      dispatch({
        type: "update_saga", action: {
          id: updatedId,
          inputValue: inputChange
        }
      })

      dispatch(magageStateAction.foundUpdateIdHandler(""))

    } else if (inputChange) {
      // if id not found then add elemetn to the array
      dispatch(magageStateAction.formUpdateHandler(false))

      const obj = {
        name: inputChange,
        id: Math.random()
      }

      dispatch({
        type: "add_saga", action: {
          list: inputArray,
          item: obj,
          inputValue: inputChange
        }
      })


    } else {
      return
    }
    dispatch(magageStateAction.formUpdateHandler(false))
    setInput()
  }

  /////////////////////////////////////////////////////////Delete///////////////////////////////////////////////


  function deleteHandler(id) {
    dispatch({
      type: "delete_saga", action: {
        id: id,
        inputArray: inputArray
      }
    })

  }


  /////////////////////////////////////////////////////////update///////////////////////////////////////////////

  function updateHandler(id) {
    if (isEdit) {
      dispatch(magageStateAction.formUpdateHandler(!isEdit))
      dispatch(magageStateAction.foundUpdateIdHandler(""))
    } else {
      dispatch(magageStateAction.formUpdateHandler(!isEdit))
      dispatch(magageStateAction.foundUpdateIdHandler(id))
    }
  }

  /////////////////////////////////////////////////////////useEffect///////////////////////////////////////////////

  useEffect(() => {
    dispatch(todoActionCreater.listHandler([]))
    setInput("")
  }, [props, dispatch])

  useEffect(() => {
    dispatch({ type: "user_saga", action: "payload" })
  }, [dispatch])

  return (
    <Fragment>

      <div className={style.mainContainer}>
        <form onSubmit={submitHandler}>
          <div className={style.inputDiv}>
            {<Form
              val={inputChange}
              changeHandler={changeHandler}
              edit={isEdit}
            />}
          </div>
        </form>
      </div>

      <ul>
        {inputArray &&
          inputArray.map((curr) => {
            return <List
              value={curr.name}
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


