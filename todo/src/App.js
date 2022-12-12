import React from 'react'
import './app.css';
import AddItem from './components/AddItem';


import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            { id: 1, label: 'Drink Coffee', important: false },
            { id: 2, label: 'Make Awesome App', important: true },
            { id: 3, label: 'Have a lunch', important: false },
        ],
    };

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

        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };


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