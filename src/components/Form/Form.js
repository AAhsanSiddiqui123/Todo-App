import React from 'react';

const Form = (props) => {
    let val = props.val || ""
    return (
        <>
            <input value={val} onChange={props.fun} placeholder="Add Your New Todo" />
            <button type='submit'>{props.sign}</button>
        </>
    )
}

export default Form