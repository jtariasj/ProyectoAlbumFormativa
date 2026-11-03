/**
 * Lista de elementos que componen el menú principal de navegación.
 *
 * Cada elemento contiene:
 * - `path`: Ruta a la que se dirige el usuario.
 * - `label`: Texto que se muestra en el menú.
 *
 * @type {{ path: string, label: string }[]}
 */
const itemsMenu = [
    { path: "/", label: "Inicio" },
    { path: "/albumes", label: "Álbumes" },
    { path: "/laminas", label: "Laminas" },
    { path: "/colecciones", label: "Colecciones" }
];

/**
 * Exporta la lista de elementos del menú para ser utilizada
 * por otros componentes de la aplicación.
 */
export default itemsMenu;