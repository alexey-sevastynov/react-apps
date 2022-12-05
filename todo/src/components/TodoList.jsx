import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {

    const elementsLi = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id}>
                <TodoListItem {...itemProps} />
            </li>
        )
    });


    return (
        <ul>
            {elementsLi}
        </ul>
    );
}

export default TodoList;