import { useState } from 'react';
import _L from '../../Localization'
import styles from './TodoForm.module.css'
console.log(styles)
function TodoForm({lng, appender}){
    // модель представления формы
    // состоит из сообщения
    const [message, setMessage] = useState('')

      // обработчик для добавления заметки
    const handlerAdd = function(event){
        // предотвращаем стандартную обработку события
        event.preventDefault();
        // вызов функции добавления сообщения
        appender(message);
        setMessage('')
    }
      // обработчик изменения значения в форме
    const handlerChanger = function(event){
        // console.log(event.target.value)
        // мутируем состояние по значению в форме
        setMessage(event.target.value)
    }

    return (
        <div className={styles.todoFormContainer}>
            <form>
                <input value={message} onChange={handlerChanger} placeholder={_L(lng).INP_PLACEHOLDER} />
                <button onClick={handlerAdd} type="submit">{_L(lng).BTN_ADD}</button>
            </form>
        </div>
    )
}

export default TodoForm