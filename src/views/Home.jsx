import React from "react"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Body from "../components/Body.jsx"

import itemsMenu from "../data/itemsMenu.js"


function Home() {
    return (
        <>
            <main>
                <Body />
            </main>
            <Footer />
        </>
    )
}

export default Home;