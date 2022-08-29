import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleTodo }) {
  return (
    <div>{todos.map(todo => <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    )}</div>
  )
}

export default TodoList