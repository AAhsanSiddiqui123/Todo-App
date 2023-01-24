import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosService } from "../Services/axios.service";

import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';
import { Get_AllUser_url, Delete_User_url, Post_User_url, Patch_User_url } from "../Services/url"
import { magageStateAction } from '../Store/manageState';
import { todoActionCreater } from "../Store/todoItemsList";
import { sendUserRequest } from "../Store/todoItemsList";
import {productList} from "../Store/action"

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
    
    dispatch({type: "test_Saga"})

    dispatch(magageStateAction.formUpdateHandler(false))
    e.preventDefault();

    if (updatedId) {
      const obj = {
        name: inputChange
      }
      axiosService({
        method: "PATCH",
        url: `${Patch_User_url}/${updatedId}`,
        body: obj,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      dispatch(todoActionCreater.updateHandler({ updatedId, inputChange }))
      dispatch(magageStateAction.foundUpdateIdHandler(""))


    } else if (inputChange) {
      // if id not found then add elemetn to the array
      dispatch(magageStateAction.formUpdateHandler(false))


      const obj = {
        name: inputChange,
        id: Math.random()
      }
      axiosService({
        method: "POST",
        url: Post_User_url,
        body: obj,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      dispatch(todoActionCreater.listHandler([...inputArray, obj]))


    } else {
      return
    }
    dispatch(magageStateAction.formUpdateHandler(false))
    setInput()
  }

  /////////////////////////////////////////////////////////Delete///////////////////////////////////////////////


  function deleteHandler(id) {
    const obj = {
      id: id
    }
    axiosService({
      method: "DELETE",
      url: `${Delete_User_url}/${id}`,
      body: obj,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    let newArray = inputArray.filter((curr) => {
      return curr.id !== id;
    })

    dispatch(todoActionCreater.listHandler(newArray))
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
    dispatch(sendUserRequest(Get_AllUser_url))
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
        {
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


