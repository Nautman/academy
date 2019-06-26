import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, completeTodo } from '../actions'

function TodoList(){
  const todos = useSelector(state => {
    return state.todoReducer.todos
  })
  const dispatch = useDispatch()

  const textInput = React.createRef()

  return(
    <div>
      <h3> List of things todo:</h3>
      <ul>
        {
          todos.map((todo, index) => (
            <li
              key = {"todolist" + index}
              onClick = {()=> dispatch(completeTodo(index))}
            >
             {todo.completed ?
               <s>{todo.text}</s>
               :
               todo.text
             }
            </li>
          ))
        }
      </ul>
      <input
        placeholder="Todo"
        ref={textInput}
      />
      <button onClick = {()=> {
        const text = textInput.current.value
        // const text = prompt("What todo would you like to add?")
        console.log(textInput)
        dispatch(addTodo(text))}
      }> Add todo </button>
    </div>
  )
}

export default TodoList
