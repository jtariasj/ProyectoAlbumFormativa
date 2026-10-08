
import { NavLink } from "react-router-dom";


function Header({ nombre, subtitulo, itemsMenu }) {
    return(
        <header id="Menu">
            <h1 className="titulo">{ nombre }</h1>
            <h3 className="subtitulo">{ subtitulo }</h3>

            <nav className="navegacion">
                {
                    itemsMenu.map(item => (
                        <NavLink
                            key={ item.path }
                            to={ item.path }
                            className={ ({ isActive }) => isActive ? "active" : "" }
                        >
                            { item.label }
                        </NavLink>
                    ))
                }
            </nav>
        </header>
    )
}

export default Header;
