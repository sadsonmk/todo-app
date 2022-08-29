import { useState, useRef, useEffect } from 'react'
import './App.css';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function handleTodo(e) {
    const name = todoRef.current.value;
    if (name === '') return
    setTodos(prevTo => {
      return [...prevTo, { id: uuidv4(), name: name, completed: false }]
    })
    todoRef.current.value = null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoRef} type='text' />
      <button onClick={handleTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todo</button>
      <div>{todos.filter(todo => !todo.completed).length} left Todos</div>
    </div>
  );
}

export default App;
