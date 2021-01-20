import React, {useState} from "react"
// 13 recuperación y 14 extraordinarios

// COMPONENTS
import Title from './camponents/Title'


function App() {
  // STATES
  const [tarea, setTarea] = useState();
  const [lista, setLista] = useState([]);
  // [valor, setearValor] = estado inicial de la variable

  // Agregar las tareas
  const agregarTarea = () => setLista([...lista, tarea]);
  // mostrar las tareas

  // elimiar la tarea
  const eliminarTarea = (id) => {
    let tareas = lista.filter((l, index) => index !== id);
    setLista(tareas)
  }

  // Obtener valor del input
  const getTarea = (event) => setTarea(event.target.value);

  return (
    <div className="App">
      <Title 
        texto="Lista de tareas"
      />
      <div>
        <input 
          type="texto" 
          id="tarea" 
          placeholder="Hacer la tarea del profe" 
          className="input"
          onChange={getTarea}
        />
        <button 
          className="btn" 
          type="button"
          onClick={agregarTarea}
        >Agregar Tarea</button>
      </div>
      <div>
        <ul>
          {
            lista.map((l, index) => {
              return(<li key={index}>
                      {l}
                      <button  
                        type="button"
                        onClick={() => eliminarTarea(index)}
                      >X</button>
                      </li>)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
