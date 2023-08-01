import {useState} from 'react'
import ListItem from './ListItem'

export default function Todo(){
    const [todo,setTodo] = useState("")
    const [todoList,setTodoList] = useState([])

    const handleChange = (e) =>{
        setTodo(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        setTodo("")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange}type='text'></input>
                <button type="submit">Add</button>
            </form>
            <div>
                {todoList.map((todo,i)=>(
                    <ListItem name={todo} key={i}/>
                ))}
            </div>
        </div>
    )
}