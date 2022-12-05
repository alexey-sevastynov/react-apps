import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {

    const elementsLi = todos.map((item) => {
        return (
            <li>
                <TodoListItem {...item} />
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