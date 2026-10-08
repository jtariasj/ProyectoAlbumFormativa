import GaleriaProductos from "../components/GaleriaProductos.jsx";

import productos from "../data/productos.js";


function Albums() {
    return (
        <main>
            <>

                <GaleriaProductos productos={ productos }/>
            </>
        </main>
    )
}

export default Albums;