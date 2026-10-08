import disney from "../assets/img/Adisney.webp"
import dragonBall from "../assets/img/Adragon.webp"
import harrypotter from "../assets/img/Aharrypotter.webp"
import marvel80 from "../assets/img/Amarvel.jpg"
import fifa2026 from "../assets/img/Amundial.jpg"
import pokemon from "../assets/img/Apokemon.jpg"
import starWars from "../assets/img/Astarwars.webp"


const productos = [
    {
        id: 1,
        nombre: "Album Dragon Ball con laminas",
        precio: 25000,
        descripcion: "Coleccion clasica con escenas de la saga Saiyajin y Freezer.",
        categoria: "Albumes",
        imagen: dragonBall
    },
    {
        id: 2,
        nombre: "Disney y sus amigos",
        precio: 8000,
        descripcion: "Album con laminas de los personajes mas iconicos de Disney.",
        categoria: "Albumes",
        imagen: disney
    },
    {
        id: 3,
        nombre: "Album Deluxe: Fifa Mundial 2026",
        precio: 30000,
        descripcion: "Album oficial con laminas de selecciones, estadios y jugadores.",
        categoria: "Albumes",
        imagen: fifa2026
    },
    {
        id: 4,
        nombre: "Album Marvel 80",
        precio: 15000,
        descripcion: "Conmemorativo de los 80 anos de Marvel.",
        categoria: "Albumes",
        imagen: marvel80
    },
    {
        id: 5,
        nombre: "Laminas: Star Wars",
        precio: 20000,
        descripcion: "Coleccion de laminas con escenas y personajes de Star Wars.",
        categoria: "Laminas",
        imagen: starWars
    },
    {
        id: 6,
        nombre: "Album Pokemon Edicion Especial",
        precio: 35000,
        descripcion: "Edicion especial para organizar tu coleccion de laminas Pokemon.",
        categoria: "Albumes",
        imagen: pokemon
    },
    {
        id: 7,
        nombre: "Album Harry Potter: Magia y Misterio",
        precio: 22000,
        descripcion: "Album con laminas de las peliculas y libros de Harry Potter.",
        categoria: "Albumes",
        imagen: harrypotter
    },

    {
        id: 8,
        nombre: "Album Tapa Blanda FIFA World Cup 2026",
        precio: 3900,
        descripcion: "Album oficial Panini de la Copa Mundial de la FIFA 2026.",
        categoria: "Albumes",
        imagen: "/img/album-tapa-blanda-mundial-2026.jpg"
    },
    {
        id: 9,
        nombre: "Album Tapa Dura Silver FIFA World Cup 2026",
        precio: 14500,
        descripcion: "Album Panini de tapa dura de la coleccion FIFA World Cup 2026, edicion Silver.",
        categoria: "Albumes",
        imagen: "/img/album-tapa-dura-silver-2026.jpg"
    },
    {
        id: 10,
        nombre: "Album Tapa Dura Gold FIFA World Cup 2026",
        precio: 14500,
        descripcion: "Album Panini de tapa dura de la coleccion FIFA World Cup 2026, edicion Gold.",
        categoria: "Albumes",
        imagen: "/img/album-tapa-dura-gold-2026.jpg"
    },
    {
        id: 11,
        nombre: "Pack Album Tapa Dura Gold + 8 Sobres",
        precio: 23300,
        descripcion: "Pack que incluye album Tapa Dura Gold, 8 sobres y 2 cartas Limited Edition.",
        categoria: "Packs",
        imagen: "/img/pack-gold-8-sobres.jpg"
    },
    {
        id: 12,
        nombre: "Pack 10 Sobres Mundial FIFA 2026",
        precio: 26990,
        descripcion: "Pack Panini de 10 sobres de laminas de la coleccion FIFA World Cup 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-10-sobres-2026.jpg"
    },
    {
        id: 13,
        nombre: "Pack 20 Sobres Mundial FIFA 2026",
        precio: 51990,
        descripcion: "Pack Panini de 20 sobres de laminas de la coleccion FIFA World Cup 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-20-sobres-2026.jpg"
    },
    {
        id: 14,
        nombre: "Pack 50 Sobres Mundial FIFA 2026",
        precio: 104990,
        descripcion: "Pack Panini de 50 sobres oficiales de la coleccion FIFA World Cup 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-50-sobres-2026.jpg"
    },
    {
        id: 15,
        nombre: "Pack 100 Sobres Mundial FIFA 2026",
        precio: 200990,
        descripcion: "Pack Panini de 100 sobres oficiales de la coleccion FIFA World Cup 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-100-sobres-2026.jpg"
    },
    {
        id: 16,
        nombre: "Pack 25 Sobres de Laminas FIFA World Cup 2026",
        precio: 99990,
        descripcion: "Pack de 25 sobres con 175 laminas de la coleccion FIFA World Cup 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-25-sobres-2026.jpg"
    },
    {
        id: 17,
        nombre: "Album FIFA World Cup 2026 + 20 Sobres",
        precio: 46990,
        descripcion: "Album de tapa blanda de la Copa Mundial 2026 acompanado de 20 sobres.",
        categoria: "Packs",
        imagen: "/img/album-20-sobres-2026.jpg"
    },
    {
        id: 18,
        nombre: "Pack 15 Sobres FIFA World Cup 2026",
        precio: 16500,
        descripcion: "Pack de 15 sobres de la coleccion oficial FIFA World Cup 2026 de Panini.",
        categoria: "Laminas",
        imagen: "/img/pack-15-sobres-2026.jpg"
    },
    {
        id: 19,
        nombre: "Set de Actualizacion FIFA World Cup 2026",
        precio: 20990,
        descripcion: "Set de actualizacion Panini para complementar el album FIFA World Cup 2026.",
        categoria: "Colecciones",
        imagen: "/img/set-actualizacion-2026.jpg"
    },
    {
        id: 20,
        nombre: "Pack 24 Sobres FIFA World Cup 2026 Adrenalyn XL",
        precio: 43200,
        descripcion: "Pack de 24 sobres de cartas coleccionables Panini Adrenalyn XL del Mundial 2026.",
        categoria: "Cartas",
        imagen: "/img/adrenalyn-24-sobres-2026.jpg"
    },
    {
        id: 21,
        nombre: "Starter Pack Classic FIFA World Cup 2026 Adrenalyn XL",
        precio: 24900,
        descripcion: "Pack inicial de la coleccion Adrenalyn XL FIFA World Cup 2026.",
        categoria: "Cartas",
        imagen: "/img/starter-classic-adrenalyn-2026.jpg"
    },
    {
        id: 22,
        nombre: "Starter Pack Deluxe FIFA World Cup 2026 Adrenalyn XL",
        precio: 24900,
        descripcion: "Pack inicial Deluxe de cartas Panini Adrenalyn XL FIFA World Cup 2026.",
        categoria: "Cartas",
        imagen: "/img/starter-deluxe-adrenalyn-2026.jpg"
    },
    {
        id: 23,
        nombre: "Pack 8 Sobres Adrenalyn XL FIFA World Cup 2026",
        precio: 0,
        descripcion: "Pack con 8 sobres de cartas y 2 cartas de edicion limitada de la coleccion Adrenalyn XL.",
        categoria: "Cartas",
        imagen: "/img/adrenalyn-8-sobres-2026.jpg"
    },
    {
        id: 24,
        nombre: "Pack 3 Sobres Adrenalyn XL FIFA World Cup 2026",
        precio: 0,
        descripcion: "Pack coleccionable con sobres, cartas de edicion limitada y carta Golden Baller de Messi.",
        categoria: "Cartas",
        imagen: "/img/adrenalyn-3-sobres-2026.jpg"
    },
    {
        id: 25,
        nombre: "Album Conmebol Copa Libertadores 2026",
        precio: 3900,
        descripcion: "Album oficial Panini dedicado a la edicion 2026 de la Copa Libertadores.",
        categoria: "Albumes",
        imagen: "/img/album-libertadores-2026.jpg"
    },
    {
        id: 26,
        nombre: "Pack 20 Sobres Conmebol Copa Libertadores 2026",
        precio: 17000,
        descripcion: "Pack Panini de 20 sobres de la coleccion Copa Libertadores 2026.",
        categoria: "Laminas",
        imagen: "/img/pack-libertadores-20-sobres.jpg"
    },
    {
        id: 27,
        nombre: "Pack 20 Sobres FIFA 365 2026",
        precio: 19000,
        descripcion: "Pack de 20 sobres de la coleccion de futbol FIFA 365 2026 de Panini.",
        categoria: "Laminas",
        imagen: "/img/pack-fifa-365-2026.jpg"
    }
];

export default productos