import Todo from "./Todo"

const TodoList = ({todoList, setTodoList}) =>{
    return(
        <div>
            {todoList.map((todoItem,i) =>(
                <Todo 
                    key={todoItem.id} 
                    todoItem={todoItem} 
                    todoList={todoList} 
                    setTodoList={setTodoList}>
                </Todo>
            ))}
        </div>
    )
}

export default TodoList