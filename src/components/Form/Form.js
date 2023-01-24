import React from 'react';

const Form = (props) => {
    let val = props.val || ""
    return (
        <>
            <input value={val} onChange={props.changeHandler} placeholder="Add Your New Todo" />
            <button type='submit'>{!props.edit ? "+" : "/"}</button>
        </>
    )
}

export default Form