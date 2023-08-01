import Form from "./components/Form";
import Header from "./components/Header";
import Todo from './components/Todo';
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
      <Todo/>
    </div>
  );
}

export default App;
