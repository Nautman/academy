export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const completeTodo = (index) => {
  return {
    type: 'COMPLETE_TODO',
    index
  }
}
