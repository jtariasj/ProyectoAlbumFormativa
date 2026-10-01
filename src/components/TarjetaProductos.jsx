function TarjetaProducto({imagen,titulo,descripcion,precio}) {

  return(
    <article className="tarjeta">
        <div className = "espacio-imagen">
            <img src={imagen}/>
        </div>
        <h3>{titulo}</h3>
        <p className="descripcion">
            {descripcion}
        </p>
        <p className = "precio">${precio} CLP</p>
    </article>
  );
}

export default TarjetaProducto;