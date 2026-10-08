import React from "react"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Body from "../components/Body.jsx"

import itemsMenu from "../data/itemsMenu.js"


function Home() {
    return (
        <>
            <Header nombre="Album de prueba" subtitulo="Completalos todos" itemsMenu={ itemsMenu } />
            <main>
                <Body />
            </main>
            <Footer />
        </>
    )
}

export default Home;