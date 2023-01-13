import React, { Component } from 'react';
import style from "./List.module.css";



export default class List extends Component {


    clickHandler = (e) => {
        if (e.target.classList.contains('closeBtn')) {
            this.props.deleteFun(this.props.id)
        } else {
            this.props.updateFun(this.props.id)
        }
    }

    render() {
        return (
            <div className="listContainer" style={{ cursor: "pointer" }} onClick={this.clickHandler} >

                <li className={style.listitems}>
                    <p>{this.props.value}</p>
                    <button className='closeBtn'>✖</button>
                </li>

            </div>
        )
    }

}

