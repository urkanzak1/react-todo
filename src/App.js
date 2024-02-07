import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoLayout } from './components/hoc/Layout/TodoLayout';
import { TodoList } from './components/todo/todo-list/TodoList';
import { TodoState } from './context/todo/todoState';

function App() {
  return (
    <TodoLayout>
      <TodoState>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={TodoList} ></Route>
            <Route path="/auth"></Route>
          </Routes>
        </BrowserRouter>
      </TodoState>
    </TodoLayout>
  );
}

export default App;
