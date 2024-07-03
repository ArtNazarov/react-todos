import { RiBookFill } from "react-icons/ri";
import styles from './Todo.module.css'
import CustomButton from '../UI/CustomButton'
// Компонент заметки
// принимает свойство в виде сообщения
function Todo({index_key, helperDelete, helperChange, content, complete}){
    const handlerDelete = ()=>{
         console.log('Delete pressed')
         helperDelete()(index_key)
         console.log('Delete end pressed')
    }
    const handlerChange = ()=>{
        console.log('Change pressed', index_key)
        helperChange()(index_key)
        console.log('Change ended')
    }

    function Complete(textUncomplete, textComplete, status){
        return status ?
        <CustomButton design="complete" className={styles.checkIcon} buttonIcon="complete" text={textUncomplete} listener={handlerChange}></CustomButton> :
        <CustomButton design="complete" buttonIcon="uncomplete" text={textComplete} listener={handlerChange}></CustomButton>
    }

    // вернуть представление 
    return (
        <div className={styles.todo}>
        <p className={styles.todoText}>
            <RiBookFill className={styles.todoIcon} /> 
            <span className={complete ? styles.completeTodoText : styles.unCompleteTodoText }>{content}</span>
            </p>
        {Complete('закончена', 'не закончена', complete)}
        <CustomButton design="del" className={styles.deleteTodo} buttonIcon="del" text={`X`} listener={handlerDelete}></CustomButton>
        </div>
    )
}

export default Todo