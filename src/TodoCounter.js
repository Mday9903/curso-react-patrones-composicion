import "./TodoCounter.css";

const TodoCounter = (props) => {
  return (
    <h1>
      {/* Este condicional evalúa si todas las tareas están finalizadas o no devolviendo un mensaje en cada caso */}
      {props.completed === props.total
        ? `Has completados todos tus TODOS!`
        : `Has Completado ${props.completed} de ${props.total} TODOS`}
    </h1>
  );
};

export { TodoCounter };
