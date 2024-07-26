import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';


const App = () => {

  const [todoList,setTodoList] = useState([
    {id:1,name:'Learning React'},
    {id:2,name:'Watching Youtube'}
  ])

  

  const hoidanit="Eric";
  const age=25;
  const data={
    address :"hanoi",
    country:"vietnam"
}
  const addNewTodo=(name)=>{
    const newTodo={
      id:randomIntFromInterval(1,100),
      name:name
    }
    setTodoList([...todoList,newTodo])
  }
  const randomIntFromInterval=(min, max)=> { // min and max included  
    return Math.floor(Math.random() * (max - min + 1) + min); 
    }
  
  return (
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    )
}

export default App
