import './App.css'

// Importe de componente
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'

import imgDragonBall from './assets/dragon-ball.jpg'

import GaleriaProductos from './components/GaleriaProductos.jsx'
function App() {
  const itemsMenu = [
    {href: "#index", label: "Inicio"},
    {href: "#albumes", label: "Albumes"},
    {href: "#laminas", label: "Laminas"},
    {href: "#colecciones", label: "Colecciones"}
    
  ];
  const productos = [
    {id: 1,
     imagen: imgDragonBall,
     nombre: "Álbum Dragon Ball con láminas",
     precio: 25000, 
     descripcion: "Colección clásica con escenas de la saga Saiyajin y Freezer. Contiene ilustraciones originales y espacio para personajes principales."
    },

    {id: 2,
      nombre: "Disney y sus amigos",
      precio: 8000,
      descripcion: "Álbum con láminas de los personajes más icónicos de Disney. Incluye Mickey, Minnie, Donald y Goofy en aventuras clásicas."
    },

    {id: 3, 
      nombre: "Álbum Deluxe: Fifa Mundial 2026", 
      precio: 30000, 
      descripcion: "Álbum oficial con láminas de selecciones, estadios y jugadores del Mundial. Incluye secciones especiales para partidos históricos y figuras destacadas."
    },{
      id: 4,
      nombre: "Álbum Marvel 80",
      precio: 15000,
      descripcion: "Conmemorativo de los 80 años de Marvel. Incluye héroes icónicos como Spider-Man, Iron Man y Capitán América, con portadas históricas."
    },{
      id: 5,
      nombre: "Láminas: Star Wars",
      precio: 20000,
      descripcion: "Colección de láminas con escenas y personajes de la saga Star Wars. Incluye ilustraciones de las películas clásicas y modernas."
    },{
      id: 6,
      nombre: "Álbum Pokémon Edición Especial",
      precio: 35000,
      descripcion: "Edición especial para organizar tu colección de láminas Pokémon. Contiene secciones para cada tipo de Pokémon y espacio para tarjetas raras."
    
    }
  ];


  return(
    <>
     <Header titulo="Album de prueba" subtitulo="Completalos todos"/>
     <Body/>
     
     <Footer/>
     
    </>
  )
}

export default App
