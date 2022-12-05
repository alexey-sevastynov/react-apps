import React from 'react'

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchValue';
import TodoList from './components/TodoList';


function App() {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Make Awesome App', important: true },
        { label: 'Have a lunch', important: false },
    ];

    return (
        <div>

            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />

        </div>

    )
}

export default App