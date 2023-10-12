import React, { createContext, useContext, useState } from 'react'
import { alltodolist } from '../data/alltodolist'
import PropTypes from 'prop-types'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(alltodolist)

  const toggleTodo = (index, todolistid) => {
    const updatedTodos = [...todos]
    const todoToUpdate = updatedTodos.find(todo => todo.id === todolistid).todo[index]

    todoToUpdate.checked = !todoToUpdate.checked

    setTodos(updatedTodos)
  }

  // const addTodo = (name) => {
  // };

  // const deleteTodo = (todolistid) => {
  // };

  // const addTodoItem = (name) => {
  // };

  // const deleteTodoItem = (index, todolistid) => {
  // };

  return (
    <TodoContext.Provider value={{ todos, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useTodo = () => {
  return useContext(TodoContext)
}
