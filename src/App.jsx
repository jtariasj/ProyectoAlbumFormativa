import './App.css'

// Importe de componente
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'


import GaleriaProductos from './components/GaleriaProductos.jsx'

import disney from './assets/img/Adisney.webp'
import dragonBall from './assets/img/Adragon.webp'
import harrypotter from './assets/img/Aharrypotter.webp'
import marvel80 from './assets/img/Amarvel.jpg'
import fifa2026 from './assets/img/Amundial.jpg'
import pokemon from './assets/img/Apokemon.jpg'
import starWars from './assets/img/Astarwars.webp'

function App() {
  const itemsMenu = [
    {href: "#index", label: "Inicio"},
    {href: "#albumes", label: "Albumes"},
    {href: "#laminas", label: "Laminas"},
    {href: "#colecciones", label: "Colecciones"}
    
  ];
  const productos = [
    {
      id: 1,
      nombre: "Álbum Dragon Ball con láminas",
      precio: 25000,
      descripcion: "Colección clásica con escenas de la saga Saiyajin y Freezer.",
      imagen: dragonBall
    },
    {
      id: 2,
      nombre: "Disney y sus amigos",
      precio: 8000,
      descripcion: "Álbum con láminas de los personajes más icónicos de Disney.",
      imagen: disney
    },
    {
      id: 3,
      nombre: "Álbum Deluxe: Fifa Mundial 2026",
      precio: 30000,
      descripcion: "Álbum oficial con láminas de selecciones, estadios y jugadores.",
      imagen: fifa2026
    },
    {
      id: 4,
      nombre: "Álbum Marvel 80",
      precio: 15000,
      descripcion: "Conmemorativo de los 80 años de Marvel.",
      imagen: marvel80
    },
    {
      id: 5,
      nombre: "Láminas: Star Wars",
      precio: 20000,
      descripcion: "Colección de láminas con escenas y personajes de Star Wars.",
      imagen: starWars
    },
    {
      id: 6,
      nombre: "Álbum Pokémon Edición Especial",
      precio: 35000,
      descripcion: "Edición especial para organizar tu colección de láminas Pokémon.",
      imagen: pokemon
    },
    {
      id: 7,
      nombre: "Álbum Harry Potter: Magia y Misterio",
      precio: 22000,
      descripcion: "Álbum con láminas de las películas y libros de Harry Potter.",
      imagen: harrypotter
    }
  ];


  return(
    <>
     <Header nombre="Album de prueba" subtitulo="Completalos todos" itemsMenu={itemsMenu}/>
     <Body/>
     <GaleriaProductos productos={productos} />
     <Footer/>
     
    </>
  )
}

export default App
