import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchValue';
import TodoList from './components/TodoList';


const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

