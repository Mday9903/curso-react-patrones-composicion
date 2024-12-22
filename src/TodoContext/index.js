//Este archivo contiene el código de las variables y estados de contexto que vamos a usar desde toda la aplicación.

import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); //Utilizamos el Custom Hook.

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);


  //Obtenemos un array con los "Todos" completados:
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  // El !! hace que el valor que se devuelva sea true o false, es decir, un booleano.

  //Guardamos en la variable totalTodos la cantidad total de "Todos" que se encuentras en el estado.
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter((todo) => {
    //Metodo para buscar tareas.
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue;
    return todoText.includes(searchText.toLowerCase());
    //* Estas funciones verifican si hay algún elemento dentro del array de "todos" que contengan en algun lugar lo mismo que se está ingresando en el input TodoSearch en tiempo real. Convierte todo a minusculas para comprarlo y por más de que lo que se busca esté en el array de "todos" en mayúscula lo va a encontrar igual. /
  });

  const addTodo = (text) => {
    //Metodo para agregar tareas.
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed:false,
    });
    saveTodos(newTodos);
  }

  const completeTodos = (text) => {
    //Metodo para completar tareas.
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    //Esta función se la enviamos al componente TodoItem para que la ejecute con el evento Onclick. Lo que hace es hacer una copia del array principal de "todos" y buscar el índice del elemento dentro del array que coincide con el texto (que se envía como argumento al componente) del TodoItem en el cual se ejecutó en onClick. Una vez que lo encuentra le cambia el valor de "completed".
  };

  const deleteTodo = (text) => {
    //Metodo para eliminar tareas.
    const newTodos = [...todos];
    saveTodos(newTodos.filter((todo) => todo.text !== text));
    // Esta funcion es parecida a "completeTodos" pero para borrar elementos. Hace una copia del array principal de "todos" y hace un filter descartando el elemento que coincide con el texto que recibe como parametro. Actualizando el array principal con los todos los elementos menos el elemento eliminado.
  };

  return (
    //Enviamos el TodoProvider con todas las propiedades que van a estar disponibles globalmente para todos los elementos hijos que contenga este componente.
    <TodoContext.Provider
      value={{
        addTodo,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
