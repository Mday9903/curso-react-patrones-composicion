import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: true },
  { text: "LALALALALA", completed: false },
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus praesentium itaque corrupti magnam nobis sit repudiandae eligendi temporibus odit, excepturi ipsam error quas molestiae veritatis corporis saepe incidunt quidem.",
    completed: true,
  },
];

function App() {
  const [todos,setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  // if (searchValue) {
  //   console.log(searchValue);
    // Condicional para evitar mostrar el valor de searchValue si está vacía.
  //}
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  // El !! hace que el valor que se devuelva sea true o false, es decir, un booleano.
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue;
     return todoText.includes(searchText.toLowerCase())
     //** Estas funciones verifican si hay algún elemento dentro del array de "todos" que contengan en algun lugar lo mismo que se está ingresando en el input TodoSearch en tiempo real. Convierte todo a minusculas para comprarlo y por más de que lo que se busca esté en el array de "todos" en mayúscula lo va a encontrar igual. /
  })

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
    //Esta función se la enviamos al componente TodoItem para que la ejecute con el evento Onclick. Lo que hace es hacer una copia del array principal de "todos" y buscar el índice del elemento dentro del array que coincide con el texto (que se envía como argumento al componente) del TodoItem en el cual se ejecutó en onClick. Una vez que lo encuentra le cambia el valor de "completed".
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.text !== text ))
    // Esta funcion es parecida a "completeTodos" pero para borrar elementos. Hace una copia del array principal de "todos" y hace un filter descartando el elemento que coincide con el texto que recibe como parametro. Actualizando el array principal con los todos los elementos menos el elemento eliminado.
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <CreateTodoButton />
      <TodoList>
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              texto={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
      </TodoList>
    </>
  );
}

export default App;
