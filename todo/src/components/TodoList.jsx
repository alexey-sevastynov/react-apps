import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li><TodoListItem /></li>
        </ul>
    )
}

export default TodoList;