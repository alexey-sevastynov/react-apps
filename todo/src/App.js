import React from 'react'
import './app.css';
import AddItem from './components/AddItem';


import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


class App extends React.Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
    };


    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter((item) => (item.id !== id));

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        // console.log('added', text)

        const newItem = this.createTodoItem(text);


        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }

    onToggleImportant = (id) => {

    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const oldItem = todoData.find((element) => element.id === id);
            const newItem = { ...oldItem, done: !oldItem.done };

            const newArray = todoData.map(element => element === oldItem ? element = newItem : element)

            return {
                todoData: newArray
            };
        })
    }

    render() {

        const doneCount = this.state.todoData.filter((element) => element.done).length;

        const todoCount = this.state.todoData.length - doneCount;

        console.log(todoCount, 'todoCount');

        return (
            <div className='todo-app' >

                <AppHeader toDo={todoCount} done={doneCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddItem addItem={this.addItem} />
            </div>
        );


    }


}

export default App