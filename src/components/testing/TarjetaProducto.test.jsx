import { render, screen, fireEvent } from "@testing-library/react"

import { describe, it, expect } from "vite"

import TarjetaProducto from "../TarjetaProductos.jsx"

describe("TarjetaProducto", () => {
    it("Debe cambiar el texto del botón a 'Guardado en favoritos' al hacer clic", () => {
    // 1.- Preparación (ARRANGE)
        const productoMock = {
            imagen: "",
            nombre: "Dark Galaxy Trading Cards",
            descripcion: "Es la colección de cartas coleccionables (trading cards) dedicada exclusivamente al universo de Warhammer 40.000.",
            precio: 50000
        }

    // 2.- Ejecución (ACT)
        render(<TarjetaProducto {...productoMock} />);


        // Buscamos el botón de la tarjeta
        const boton = screen.getByRole("button");

        // Simulamos el Clic.
        fireEvent.click(boton);

    // 3.- Verificar resultado (ASSERT)
        expect(boton.textContent).toContain();
    });
});