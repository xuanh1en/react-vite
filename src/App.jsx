import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const hoidanit="Eric";
const age=25;
const data={
  address :"hanoi",
  country:"vietnam"
}
const App = () => {

  return (
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew/>
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    )
}

export default App
