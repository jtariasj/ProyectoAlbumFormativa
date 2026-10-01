function TarjetaProducto({imagen,nombre,descripcion,precio}) {

  return(
    <article className="tarjeta">
        <div className = "espacio-imagen">
            <img src={imagen}/>
        </div>
        <h3>{nombre}</h3>
        <p className="descripcion">
            {descripcion}
        </p>
        <p className = "precio">${precio} CLP</p>
    </article>
  );
}

export default TarjetaProducto;