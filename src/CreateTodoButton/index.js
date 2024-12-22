import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
const CreateTodoButton = () => {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext)
  return (
    <div className='ButtonContainer '>
      <button className={`CreateTodoButton__mainButton ${openModal && "CreateTodoButton__mainButton--formVisible"}`}
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        +
      </button>
    </div>
  );
};

export { CreateTodoButton };
