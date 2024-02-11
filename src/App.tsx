import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoLayout } from './components/hoc/Layout/TodoLayout';
import { TodoList } from './components/todo/todo-list/TodoList';
import { Provider } from 'react-redux';
import { TodoStore } from './redux/TodoStore';

function App() { 
  return (
    <Provider store={TodoStore}>
      <TodoLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={TodoList} ></Route>
              <Route path="/auth"></Route>
            </Routes>
          </BrowserRouter>
      </TodoLayout>
    </Provider>
  );
}

export default App;
