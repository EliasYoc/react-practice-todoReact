import React from "react";

const Todo = ({
  title,
  todo,
  description,
  completed,
  todoDelete,
  todoCompleted,
  setTodoEdit,
  id,
}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title">
          {title}
          <button
            onClick={() => todoCompleted(id)}
            className={`btn btn-sm ${
              completed ? "btn-outline-success" : "btn btn-sm btn-success"
            }`}
          >
            {completed ? "Completado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text">{description}</p>
        <hr />
        <button
          onClick={() => {
            setTodoEdit(todo);
          }}
          className="btn btn-sm btn-primary me-md-2"
        >
          Editar
        </button>
        <button
          onClick={() => {
            todoDelete(id);
          }}
          className="btn btn-sm btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Todo;
