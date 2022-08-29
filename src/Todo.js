import React from 'react'

function Todo({ todo, toggleTodo }) {
  return (
    <div>
      <label >
        <input type="checkbox" checked={todo.completed} onChange={() => { toggleTodo(todo.id) }} />
        {todo.name}

      </label>


    </div>
  )
}

export default Todo