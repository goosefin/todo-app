import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from './components/TodoList'
import {useState} from 'react'

function App() {
  const [todo,setTodo] = useState("")
  const [todoList,setTodoList] = useState([])

  return (
    <div>
      <Header/>
      <Form 
        todo={todo} 
        setTodo={setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
