import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoLayout } from './components/hoc/Layout/TodoLayout';
import { TodoList } from './components/todo/todo-list/TodoList';
import { Provider } from 'react-redux';
import { TodoStore } from './redux/TodoStore';
import { Loader } from './components/loader/Loader';
import { TodosSearch } from './components/todos-search/TodosSearch';

function App() { 
  return (
    <Provider store={TodoStore}>
      <Loader></Loader>
      <TodoLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={TodoList} ></Route>
              <Route path="/auth"></Route>
              <Route path="/todosSearch" Component={TodosSearch}></Route>
            </Routes>
          </BrowserRouter>
      </TodoLayout>
    </Provider>
  );
}

export default App;
