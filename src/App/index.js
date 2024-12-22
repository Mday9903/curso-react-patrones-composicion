/**
 * ESTA ES UN APLICACIÓN QUE MUESTRA UN LISTADO DE TAREAS QUE PUEDES IR AGREGANDO, TACHANDO Y ELIMINANDO LAS MISMAS. CON UN BUSCADOR QUE FILTRA EN TIEMPO REAL.
 */
import { TodoProvider } from "../TodoContext/index.js";
import { AppUI } from "./AppUI.js";


function App() {
  
  return (
    // Colocamos toda la aplicacion dentro del TodoProvider para poder accerder a los estados y funciones globales.
    <TodoProvider>
      {/* Creamos un componente "AppUI" para mejorar la legibilidad de nuestra App. */}
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
