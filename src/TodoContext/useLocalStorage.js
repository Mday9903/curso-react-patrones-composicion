import { useEffect, useState } from "react";

//*Creamos un Custom Hook con LocalStorage:
function useLocalStorage(itemName, initialValue){

    // Creamos un estado y le enviamos como estado inicial al Array obtenido anteriormente:
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //Utilizamos un setTimeout para evaluar el estado de carga:
        setTimeout(() => {
          try {
          //Obtenemos los datos de localStorage del elemento recibido como parametro: 
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){      
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = initialValue; //En caso de que no haya nada dentro de localStorage guardaremos en la variable "parsedItem" un valor inicial que recibe este Hook por props (puede ser un array vacío así) la aplicación puede funcionar correctamente.
          } else {
            // En el caso de que sí haya información en localStorage vamos a convertirla nuevamente de un String a un array para poder utilizarla y acceder a ella desde la aplicación.
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }

          setLoading(false);
          
        } catch (error) {
          setError(true);
          setLoading(false);
        }
        },2000)
          
    },[initialValue, itemName]);
    
    // Esta función va a modificar (recibiendo un array nuevo de "Items") el localStorage junto con el estado de "Items".
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage};

//CODIGO PARA CARGAR EL Local Storage:
// Definimos un array con los datos de cada "To Do":

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con la Llorona", completed: true },
//   { text: "LALALALALA", completed: false },
//   {
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque doloribus praesentium itaque corrupti magnam nobis sit repudiandae eligendi temporibus odit, excepturi ipsam error quas molestiae veritatis corporis saepe incidunt quidem.",
//     completed: true,
//   },
// ];

// Vamos a guardar el array "defaultTodos" dentro de localStorage con el metodo setItem y tenemos que convertir ese array a String con el método stringify:

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));