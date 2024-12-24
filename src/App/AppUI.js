import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { SkeletonTodoList } from "../TodoList/SkeletonTodoList.js";
import { TodoContext } from "../TodoContext/index.js";
import { useContext } from "react";
import { Modal } from "../Modal.js";
import { TodoForm } from "./TodoForm/index.js";

const AppUI = () => {
  // Vamos a crear una variable en donde vamos a recibir las variables y metodos globales que vamos a utilizar en este componente.

  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodo,
    totalTodos,
    openModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {/* TodoContext.Consumer necesita que le enviemos una función colocandole dentro los "children" */}
        {() => (
          <TodoList>
            {loading && <SkeletonTodoList />}
            {error && <p>Desespérate, hubo un error!!</p>}
            {/* Verificamos si existen TODOS y tambien verificamos si existen pero no coinciden con la búsqueda. */}
            {!loading &&
              (totalTodos === 0 ? (
                <p>Crea tu primer TODO!</p>
              ) : searchedTodos.length === 0 ? (
                <p>No hay coincidencias.</p>
              ) : null)}

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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm openModal={openModal}></TodoForm>
        </Modal>
      )}
    </>
  );
};

export { AppUI };
