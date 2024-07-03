import CustomButton from "../UI/CustomButton";
import styles from './TodosActionPanel.module.css'
function TodosActionPanel({helperDelCompleted, helperClearAll}){
    function handlerClearAll(){
        helperClearAll()
    }
    function handlerClearCompleted(){
        helperDelCompleted()
    }

    return (
        <div className={styles.panel}>
            <CustomButton buttonIcon={'clearcompleted'} listener={handlerClearCompleted} text="Очистить завершенные"></CustomButton>
            <CustomButton buttonIcon={'clearall'} listener={handlerClearAll} text="Очистить список"></CustomButton>
        </div>
    )
}

export default TodosActionPanel