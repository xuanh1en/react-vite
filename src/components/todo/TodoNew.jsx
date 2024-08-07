import { useState } from "react"


const TodoNew=(props)=>{
    const [valueInput,setValueInput]=useState("eric")

    // eslint-disable-next-line react/prop-types
    const {addNewTodo}=props
    // addNewTodo("Eric")

    const handleClick=()=>{
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange=(name)=>{
        console.log("handleOnChange",name)
        setValueInput(name)
    }
    return (
        <div className="todo-new">
          <input type="text" className='news' 
            onChange={(event)=>handleOnChange(event.target.value)}
            value={valueInput}
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