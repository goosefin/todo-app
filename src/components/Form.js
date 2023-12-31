import ListItem from './Todo'
import styles from '../style.module.css'
import shortid from 'shortid'

const Form = ({todo, setTodo, todoList, setTodoList})=>{
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodoList([...todoList,{name:todo, id:shortid.generate()}])
        setTodo('')
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
        </div>
    )
}

export default Form