import React, { Fragment, useState, useEffect } from 'react';
import style from "./toDoItems.module.css";
import List from "./List/List";
import Form from './Form/Form';
import { axiosService } from "../Services/axios.service";
import { Get_AllUser_url, Delete_User_url, Post_User_url, Patch_User_url } from "../Services/url"


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

    // find if the id is already available or not then update
    let valueFound = inputArray.find((curr) => {
      return curr.id === updatedId
    })

    if (valueFound) {
      console.log(`${Patch_User_url}/${updatedId}`);
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
      valueFound.name = inputChange
      setupdatedId("")

    } else if (inputChange) {
    // if id not found then add elemetn to the array
      setisUpdate(false);

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

      setinputArray([...inputArray, obj])


    } else {
      return
    }
    setisUpdate(false)
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

  /////////////////////////////////////////////////////////useEffect///////////////////////////////////////////////

  useEffect(() => {
    setinputArray([])
    setInput("")
  }, [props])

  useEffect(() => {
    axiosService({ url: Get_AllUser_url }).then((res) => {
      setinputArray(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

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


