import React from 'react'
import './app.css';


import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';


function App() {
    const todoData = [
        { id: 1, label: 'Drink Coffee', important: false },
        { id: 2, label: 'Make Awesome App', important: true },
        { id: 3, label: 'Have a lunch', important: false },
    ];

    return (
        <div className='todo-app'>

            <AppHeader />
            <div className='top-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />

        </div>

    )
}

export default App