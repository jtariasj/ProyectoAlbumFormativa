
import TarjetaProducto from "./TarjetaProductos";


function GaleriaProductos({ productos }) {
    return (
        <section className="galeria"> {
            productos.map((producto) => (
                <TarjetaProducto
                    key={producto.id}
                    imagen={producto.imagen}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                />
            ))
        }
        </section>
    )
}

export default GaleriaProductos;