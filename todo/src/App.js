import React from 'react'
import './app.css';


import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


class App extends React.Component {


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

    render() {
        return (
            <div className='todo-app' >

                <AppHeader />
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={this.state.todoData}
                    onDeleted={this.deleteItem} />

            </div>
        );


    }


}

export default App