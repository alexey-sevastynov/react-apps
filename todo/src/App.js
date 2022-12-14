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
        searchText: '',
        statusFilter: 'all', // all,active,done
        togleImportant: false
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
    };

    toggleProperty(arr, id, propName) {

        const oldItem = arr.find((element) => element.id === id);
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        const newArray = arr.map(element => element === oldItem ? element = newItem : element)

        return newArray;
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData, togleImportant }) => {
            const newTogleImportant = !togleImportant;
            console.log(newTogleImportant, 'newTogleImportant');

            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
                togleImportant: newTogleImportant
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });

    };

    changeSearchText = (e) => {
        this.setState(({ searchText }) => {
            return {
                searchText: e.target.value,
            };
        });
    };

    search(items, searchText) {
        if (searchText === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase()
                .includes(searchText.toLowerCase());
        });
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (statusFilter) => {
        this.setState({ statusFilter });
    }

    render() {

        const { todoData, searchText, statusFilter } = this.state;

        const visibleItems =
            this.filter(this.search(todoData, searchText), statusFilter);

        const doneCount = todoData.filter((element) => element.done).length;

        const todoCount = todoData.length - doneCount;



        return (
            <div className='todo-app' >

                <AppHeader toDo={todoCount} done={doneCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel searchText={this.state.searchText} changeSearchText={this.changeSearchText} />
                    <ItemStatusFilter
                        statusFilter={this.state.statusFilter}
                        onFilterChange={this.onFilterChange} />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                    togleImportant={this.state.togleImportant}
                />
                <AddItem addItem={this.addItem} />
            </div>
        );


    }


}

export default App