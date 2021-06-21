import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2>TodoList</h2>
      {todos.length === 0 ? (
        <div className="alert alert-primary">Sin tareas</div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            todoDelete={todoDelete}
            todoCompleted={todoCompleted}
            setTodoEdit={setTodoEdit}
            id={todo.id}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
