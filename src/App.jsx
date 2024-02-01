/* eslint-disable react/jsx-key */
import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Cria funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: FontFaceSetLoadEvent,
    },
    {
      id: 2,
      text: "Faculdade",
      category: "Estudos",
      isCompleted: FontFaceSetLoadEvent,
    },
    {
      id: 3,
      text: "Academia",
      category: "Pessoal",
      isCompleted: FontFaceSetLoadEvent,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false
    }
    ];

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id == id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}  completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
