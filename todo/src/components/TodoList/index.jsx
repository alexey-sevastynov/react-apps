import React from "react";

import TodoListItem from "../TodoListItem";

import './todoList.css';

const TodoList = ({ todos, onDeleted }) => {

    const elementsLi = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)} />
            </li>
        )
    });


    return (
        <>
            <ul className="list-group todo-list">
                {elementsLi}
            </ul>
            
        </>

    );
}

export default TodoList;