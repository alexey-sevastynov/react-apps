import React from "react";
import './todoListItem.css';

class TodoListItem extends React.Component {
    state = {
        done: false,
    }


    onLabelClick = () => {
        this.setState({
            done: !this.state.done
        })
    }




    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            console.log('classNames');
            classNames += ' done';
        }
        console.log(classNames);

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames} >
                <span className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <div>
                    <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="bi bi-trash" />
                    </button>
                    <button type="button"
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="bi bi-exclamation-lg"></i>
                    </button>
                </div>
            </span>
        )
    }
}



export default TodoListItem;