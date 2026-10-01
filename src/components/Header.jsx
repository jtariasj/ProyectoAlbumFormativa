function Header({ nombre, subtitulo, itemsMenu}) {



  return(
    <>
    <header id ="encabezado">
        <h1>{nombre}</h1>
        <h3>{subtitulo}</h3>
        <nav id = "menu-principal">
            <ul>
                {itemsMenu.map((item) =>(
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}



            </ul>
            
        </nav>
    </header>
    </>
  )
}

export default Header;
