import Todo from "./Todo"

const TodoList = ({todoList}) =>{
    return(
        <div>
            {todoList.map((todoItem,i) =>(
                <Todo todoItem={todoItem.name}></Todo>
            ))}
        </div>
    )
}

export default TodoList