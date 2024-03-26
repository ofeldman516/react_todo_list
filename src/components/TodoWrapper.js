import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm.js';
import {Todo} from './Todo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='todo-wrapper'>
      <h1>My To Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />

      ))}
    </div>
  )
}
