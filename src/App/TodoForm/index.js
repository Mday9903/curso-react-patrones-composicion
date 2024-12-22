import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext";
const TodoForm = () => {
  const {
    addTodo,
    setOpenModal,
    openModal
  } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue);
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  return (
    <form
      onSubmit={onSubmit}
      action=""
      className={openModal && "TodoForm__Form show-form"}
    >
      <label htmlFor="TodoForm__textArea">Escribe tu nuevo TODO</label>
      <textarea
        className="TodoForm__textArea"
        name=""
        id="TodoForm__textArea"
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
        // Le coloco estilos acá porque no me deja modificarlos con los selectores CSS ya que tiene estilos en linea predeterminados en navegador.
        style={{ width: "80%", height: "" }}
      ></textarea>
      <div className="TodoForm_buttonContainer">
        <button type="submit" className="TodoForm__button TodoForm__button--ad">
          Añadir
        </button>
        <button type="button" className="TodoForm__button TodoForm__button--cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
