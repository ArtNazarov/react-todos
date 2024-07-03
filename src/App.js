// import logo from './logo.svg';
import './App.css';
// Для модификации состояния нужен useState
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Импортируем форму и список (свои компоненты)
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActionPanel from './components/Todos/TodosActionPanel';
import {getInitialState, changerTasks, clearAllItems, addTodos} from './Models';

function App() {
  
  
  // модель представления в виде состояния
  // и ее сеттер - начальное значение
  // список пуст
  const [todos, setTodos] = useState(getInitialState())
  // Добавляет заметку и мутирует состояние сеттером
  const appendTodo = (text) => {
   
      const changed_todos = addTodos(todos, text)
      setTodos(changed_todos)
      console.log(changed_todos)
 
  }

  const actionRemove = () =>{
    return function(index_key){
       console.log('Мутируем состояние')
        const state_copy = [...todos];
        state_copy.splice(index_key, 1)
        setTodos(state_copy)
        console.log(state_copy)
    }
  }

  const actionChange = () =>{
    return function(index_key){
      
        setTodos( changerTasks(todos, index_key) )
    
    }
  }

  const actionClearAll = ()=> {
      setTodos(clearAllItems())
  }

  const actionDelCompleted = () => {
    setTodos([...todos].filter(el => !el.complete ))
  }


    // Компонент включает в себя форму для добавления и список
    // в форму функция для добавления передается
    // в компонент списка сам список (модель представления)
  return (
    <div className="App">
      <h1>Мои заметки</h1>
      <TodosActionPanel helperDelCompleted={actionDelCompleted} helperClearAll={actionClearAll}></TodosActionPanel>
      <TodoForm appender={appendTodo}></TodoForm>
      <TodoList changer={actionChange} remover={actionRemove}  todos={todos}></TodoList>
    </div>
  );
}

export default App;
