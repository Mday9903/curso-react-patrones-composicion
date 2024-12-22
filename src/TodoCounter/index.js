import React from "react";
import "./TodoCounter.css";
import SkeletonTodoCounter from "./SkeletonTodoCounter";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  // Vamos a crear una variable en donde vamos a recibir las variables y metodos globales que vamos a utilizar en este componente.
  const {
    loading,
    completedTodos,
    totalTodos,

  } = React.useContext(TodoContext)
  return (
    loading?
    <SkeletonTodoCounter/>
    :
      <h1>
        {/* Este condicional evalúa si todas las tareas están finalizadas o no devolviendo un mensaje en cada caso */}
        {completedTodos === totalTodos
          ? `Has completados todos tus TODOS!`
          : `Has Completado ${completedTodos} de ${totalTodos} TODOS`}
      </h1>
  );
};

export { TodoCounter };
