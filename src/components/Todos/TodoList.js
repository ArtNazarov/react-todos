import Todo from './Todo'
import styles from './TodoList.module.css'
// Компонент списка сообщений (массив)
function TodoList({changer, remover, todos}){
    // Тиражируем  дочерние компоненты
    // с помощью map
    console.log(todos.map(todo => todo.index_key))
    return (
        <div className={styles.todoListContainer}>
            {
              !todos.length && <p className={styles.warning}>Нет задач</p> 
            }
            {
               todos && todos.map((todo) => <Todo index_key={todo.index_key} helperChange={changer} helperDelete={remover} key={todo.index_key} {...todo}></Todo>)
            }
            <p>Завершено задач: {
                todos.filter(el => el.complete).length
            }
            </p>
        </div>
    )
}

export default TodoList