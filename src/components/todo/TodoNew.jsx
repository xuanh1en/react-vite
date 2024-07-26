

const TodoNew=(props)=>{
    const {addNewTodo}=props
    // addNewTodo("Eric")

    const handleClick=()=>{
        alert("click me")
    }

    const handleOnChange=(name)=>{
        console.log("handleOnChange",name)
    }
    return (
        <div className="todo-new">
          <input type="text" className='news' 
            onChange={(event)=>handleOnChange(event.target.value)}
          />
          <button className='btnAdd'
            style={{cursor: 'pointer'}}
            onClick={handleClick}
          >Add</button>
        </div>
    )
}

export default TodoNew