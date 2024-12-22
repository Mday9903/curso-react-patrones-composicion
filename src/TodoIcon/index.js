import { faCircleXmark, faSquareCheck,faSquare } from "@fortawesome/free-regular-svg-icons";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconType = {
    //Objeto con los iconos cargados:
    'check': <FontAwesomeIcon className="TodoItem__Icon TodoItem_IconCheck " icon={faSquare}/>, 
    'checked': <FontAwesomeIcon className="TodoItem__Icon TodoItem__Checked" icon={faSquareCheck}/>, 
    'delete': <FontAwesomeIcon className="TodoItem__Icon" icon={faCircleXmark}/> 
}
const TodoIcon = (props) => {
    return ( 
        <>
            {props.completed?IconType["checked"]:IconType[props.type]}
            {/* En caso de que llegue el atributo "completed" muestro el checked y otro caso muestro el icono que coincide con el type enviado como props. */}
        </>
     );
}
 
export default TodoIcon;