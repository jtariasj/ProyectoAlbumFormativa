import GaleriaProductos from "./GaleriaProductos.jsx";
import productos from "../data/productos.js";

function Body() {
    const productosMasCaros = [...productos]
        .sort((a, b) => b.precio - a.precio)
        .slice(0, 4);

    return (
        <section id="destacados">
            <h2>Productos destacados</h2>
            <GaleriaProductos productos={productosMasCaros} />
        </section>
    );
}

export default Body;
