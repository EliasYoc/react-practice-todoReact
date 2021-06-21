import React, { useEffect, useState } from "react";
const initialFormValues = {
  title: "",
  description: "",
};
const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(false);
  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      // alert("llena los campos");
      setError(true);
      return;
    }
    if (todoEdit) {
      todoUpdate(formValues);
    } else {
      todoAdd(formValues);
      setFormValues(initialFormValues);
    }
    setError(false);
  };
  return (
    <div>
      <h2 className="text-center display-6">
        {todoEdit ? "Editar Tarea" : "Nueva tarea"}
      </h2>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mb-2"
        >
          Cancelar edición
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Título"
          className="form-control"
          value={title}
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Descripción"
          className="form-control mt-2"
          value={description}
        ></textarea>
        <button className="btn btn-primary  form-control  mt-2">
          {todoEdit ? "Actualizar Tarea" : "Agregar tarea"}
        </button>
      </form>
      {error && (
        <div className="alert alert-danger mt-2">"Llena los campos"</div>
      )}
    </div>
  );
};

export default TodoForm;
