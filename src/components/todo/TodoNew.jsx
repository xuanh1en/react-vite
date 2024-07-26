

const TodoNew=(props)=>{
    const {addNewTodo}=props
    addNewTodo("Eric")
    return (
        <div className="todo-new">
          <input type="text" className='news' />
          <button className='btnAdd'>Add</button>
        </div>
    )
}

export default TodoNew