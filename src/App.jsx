
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./views/Home.jsx";
import Albums from "./views/Albums.jsx";

import itemsMenu from "./data/itemsMenu.js";


function App() {
    return(
        <>
            <Header
                nombre={ "Album de prueba" }
                subtitulo={ "Completalos todos" }
                itemsMenu={ itemsMenu }
            />

            <Routes>
                <Route path={ "/" } element={ <Home />} />
                <Route path={ "/albumes" } element= { <Albums /> } />
                <Route />
                <Route />
            </Routes>
        </>
    )
}

export default App;
