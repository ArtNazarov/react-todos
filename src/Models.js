  // подключаем библиотеку для генерации идентификаторов
import { v4 as uuidv4 } from 'uuid';
 
  // Создает новую задачу - случайный уникальный идентификатор
  // text - текст заметки
  // complete - логическое, выполнена ли
  function createTask(text){
    return {index_key: uuidv4(), content: text, complete : false}
  }

  // Добавляет задачу к списку
  function addTodos(tasks, text){
    const task = createTask(text)
    return [...tasks, task] 
  }

  // меняет состояние выбранной задачи на противоположное
  const changerTasks = (tasks, index_key) => {
     let tasks_copy = [...tasks];
       // пройдем по списку в поисках идентификатора
     for (let task of tasks_copy){
        // если найден требуемый
      if (task.index_key === index_key) {
          // меняем статус
        task.complete = !task.complete;
          // досрочно выходим из цикла
        break;
      }
     }
     return tasks_copy 
  }
  
  // тестовое состояние 
  const getInitialState = () => { return [
                               createTask('Подоить корову'),
                               createTask('Купить молоко'),
                               createTask('Заплатить налоги')
                                    ];
    };

      // очищает список
  const clearAllItems = () => {
    return [];
  }

    // предоставляем функции для импорта
  export {changerTasks, getInitialState, clearAllItems, addTodos, createTask }