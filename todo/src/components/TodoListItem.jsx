import React from "react";

const TodoListItem = ({ label, impotrant = false }) => {

    const style = {
        color: impotrant ? 'tomato' : 'black'
    };

    return <span style={style}>{label}</span>;
};


export default TodoListItem;