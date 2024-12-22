import "./TodoItem.css";
import TodoIcon from "../TodoIcon/index";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span
        className={`TodoItem__Check  ${
          props.completed && "TodoItem__Check--completed"
        }`}
        onClick={props.onComplete}
        //onComplete es una función enviada como parametro desde App para ejecutarla en el evento onClick del TodoItem. Sirve para indicarle al "todo" en el que se hace click que tiene que cambiar su estado de completed. (Esta funcion onComplete está codificada en el App.js)
      >
        <TodoIcon type='check' completed={props.completed}/>
      </span>
      <p
        className={`TodoItem--black ${props.completed && "TodoItem__text--completed"}`}
      >
        {props.texto}
      </p>
      {/* Agregamos un condicional en las dos etiquetas anteriores para evaluar que si el componente tiene el atributo completed=true, es decir, que si el "To Do" fué hecho o finalizado, le agregue una clase de css. */}
      <span className="TodoItem__delete " onClick={props.onDelete}>
      <TodoIcon type='delete'/>
      </span>
    </li>
  );
};

export { TodoItem };
