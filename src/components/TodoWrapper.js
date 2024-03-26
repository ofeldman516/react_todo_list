import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm.js';
import {Todo} from './Todo'
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditToDoForm.js';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='todo-wrapper'>
      <h1>My To Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (

          <Todo task={todo} key={index}
          toggleComplete={toggleComplete}
          deleteTodo = {deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}
