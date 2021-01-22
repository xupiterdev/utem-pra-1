import React, {useState, useEffect} from "react"
// 13 recuperación y 14 extraordinarios
import axios from "axios";

// COMPONENTS
// import Title from './camponents/Title'

function App(){
  const [pokemones, setPokemones] = useState([]);

  const getPokemones = async () => {
    try{
      let pokemones = await axios.get("https://pokeapi.co/api/v2/pokemon")
      setPokemones(pokemones.data)
    }catch(err){console.log("Error -> ", err)}
    // await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    // .then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }


 useEffect(() => {
   getPokemones();
 },[]);
 console.log(pokemones.results);

  return(<div>
    {pokemones.results.map((p) => <div>{p.name}</div>)}
  </div>)
}

export default App;

























// function App() {
//   // STATES
//   const [tarea, setTarea] = useState();
//   const [lista, setLista] = useState([]);
//   // [valor, setearValor] = estado inicial de la variable

//   // Agregar las tareas
//   const agregarTarea = () => setLista([...lista, tarea]);
//   // mostrar las tareas

//   // elimiar la tarea
//   const eliminarTarea = (id) => {
//     let tareas = lista.filter((l, index) => index !== id);
//     setLista(tareas)
//   }

//   // Obtener valor del input
//   const getTarea = (event) => setTarea(event.target.value);

//   return (
//     <div className="App">
//       <Title 
//         texto="Lista de tareas"
//       />
//       <div>
//         <input 
//           type="texto" 
//           id="tarea" 
//           placeholder="Hacer la tarea del profe" 
//           className="input"
//           onChange={getTarea}
//         />
//         <button 
//           className="btn" 
//           type="button"
//           onClick={agregarTarea}
//         >Agregar Tarea</button>
//       </div>
//       <div>
//         <ul>
//           {
//             lista.map((l, index) => {
//               return(<li key={index}>
//                       {l}
//                       <button  
//                         type="button"
//                         onClick={() => eliminarTarea(index)}
//                       >X</button>
//                       </li>)
//             })
//           }
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
