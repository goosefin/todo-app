import ListItem from './Todo'
import styles from '../style.module.css'

const Form = ({todo, setTodo, todoList, setTodoList})=>{
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodoList([...todoList,todo])
        setTodo('')
        console.log(todoList)
    }
    return(
        <div className={styles.todoform}>
            <form  onSubmit={handleSubmit}>
                <input 
                    className={styles.todoinput} 
                    placeholder="Add Todo Item" 
                    value={todo} 
                    onChange={handleChange}
                    type='text'></input>
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