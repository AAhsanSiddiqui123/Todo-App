import React, { } from 'react';
import style from "./List.module.css";



function List (props){

    function clickHandler (e) {
        if (e.target.classList.contains('closeBtn')) {
            props.deleteFun(props.id)
        } else {
            props.updateFun(props.id)
        }
    }


    return (
        <div className="listContainer" style={{ cursor: "pointer" }} onClick={clickHandler} >

        <li className={style.listitems}>
            <p>{props.value}</p>
            <button className='closeBtn'>✖</button>
        </li>

    </div>
    )


}

export default List