import React from "react";

import TodoListItem from "../TodoListItem";

import './todoList.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

    const elementsLi = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
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