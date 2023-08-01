import {useState} from 'react'
import ListItem from './ListItem'
import styles from '../style.module.css'

const Form = ()=>{
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
        <div className={styles.todoform}>
            <form  onSubmit={handleSubmit}>
                <input className={styles.todoinput} placeholder="Add Todo Item" value={todo} onChange={handleChange}type='text'></input>
                <button className={styles.todobutton} type="submit">Add</button>
            </form>
            {/* <div>
                {todoList.map((todo,i)=>(
                    <ListItem name={todo} key={i}/>
                ))}
            </div> */}
        </div>
    )
}

export default Form