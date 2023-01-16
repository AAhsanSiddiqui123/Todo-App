import React from 'react';
import style from "./Form.module.css"

const Form = (props) => {
    return (
        <>
            <input value={props.val} onChange={props.fun} placeholder="Add Your New Todo" />
            <button type='submit'>{props.sign}</button>
        </>
    )
}

export default Form