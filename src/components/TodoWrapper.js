import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
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
      <TodoForm addTodo={addTodo} />
    </div>
  )
}
