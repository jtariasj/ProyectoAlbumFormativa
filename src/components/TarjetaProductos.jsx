import React, { useState } from "react";

function TarjetaProducto({ imagen, nombre, descripcion, precio }) {
    const [meGusta, setMeGusta] = useState(false)
    const alternar = () => {
        if (meGusta === false) {
            setMeGusta(true)
        } else {
            setMeGusta(false)
        }
    }

    return(
        <article className="tarjeta">
            <figure className="espacio-imagen">
                <img src={ imagen } />
            </figure>

            <h3>{ nombre }</h3>
            <p className="descripcion">{ descripcion }</p>
            <p className = "precio">${ precio } CLP</p>

            <button
                onClick = {alternar}
                style = {
                    {
                        backgroundColor: meGusta ? "#bbb" : "#ddd",
                        color: "#222",
                        fontWeight: "bold"
                    }
                }
            > Siempre pasa </button>
        </article>
    );
}

export default TarjetaProducto;