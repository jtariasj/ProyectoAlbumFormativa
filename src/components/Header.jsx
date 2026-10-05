function Header({ nombre, subtitulo, itemsMenu }) {
  return(
        <header id="Menu">
                <h1 className="titulo">{nombre}</h1>
                <h3 className="subtitulo">{subtitulo}</h3>
                <nav className="navegacion">
            <ul>
                {itemsMenu.map((item) =>(
                    <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}



            </ul>
            
        </nav>
        </header>
  )
}

export default Header;
