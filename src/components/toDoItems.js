import React, { Fragment, useState, useEffect } from 'react';

import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';
import { axiosService } from "../Services/axios.service";
import { Get_AllUser_url, Delete_User_url, Post_User_url, Patch_User_url } from "../Services/url"
import { useSelector, useDispatch } from 'react-redux';
import { magageStateAction } from '../Store/manageState';
import {todoActionCreater} from "../Store/todoItemsList";



function ToDoItems(props) {


  const dispatch = useDispatch();
  const isupdate = useSelector((state) => state.update.isupdate);
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

      dispatch(todoActionCreater.updateHandler({updatedId , inputChange}))
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

  let toggle = true;
  function updateHandler(id) {
    if (toggle) {
      toggle = false;
      dispatch(magageStateAction.foundUpdateIdHandler(""))
    } else {
      toggle = true;
      dispatch(magageStateAction.foundUpdateIdHandler(id))
    }
    dispatch(magageStateAction.formUpdateHandler(toggle))
  }

  /////////////////////////////////////////////////////////useEffect///////////////////////////////////////////////

  useEffect(() => {
    dispatch(todoActionCreater.listHandler([]))
    setInput("")
  }, [props, dispatch])

  useEffect(() => {
    
    axiosService({ url: Get_AllUser_url }).then((res) => {
      dispatch(todoActionCreater.listHandler(res.data))

    }).catch((err) => {
      console.log(err);
    })
  }, [dispatch])

  return (
    <Fragment>

      <div className={style.mainContainer}>
        <form onSubmit={submitHandler}>
          <div className={style.inputDiv}>
            {isupdate ? <Form
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


