import { useState } from "react"


const TodoNew=(props)=>{
    const [valueInput,setValueInput]=useState("eric")

    const {addNewTodo}=props
    // addNewTodo("Eric")

    const handleClick=()=>{
        addNewTodo(valueInput)
    }

    const handleOnChange=(name)=>{
        console.log("handleOnChange",name)
        setValueInput(name)
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
          <div>
            My text input = {valueInput}
          </div>
        </div>
    )
}

export default TodoNew