import React, {Component } from 'react';
import style from "./List.module.css";



export default class List extends Component {


    deleteHandler = () => {
        this.props.fun(this.props.id)
        
    }

    render() {
        console.log("sdasdsd")
        return (
            <div className={style.listContainer}>
                <li className={style.listitems}>
                    <p>{this.props.value}</p>
                    <button onClick={this.deleteHandler}>✖</button>
                </li>
            </div>
        )
    }

}

