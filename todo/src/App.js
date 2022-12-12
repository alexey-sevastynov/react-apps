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
        console.log('toggle impotrant', id);
    };

    onToggleDone = (id) => {
        console.log('toggle done', id);

    }

    render() {
        return (
            <div className='todo-app' >

                <AppHeader />
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