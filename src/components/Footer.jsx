import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Formulario from "./Formulario.jsx";


function Footer() {
    return(
        <>
            <footer>
                <p>Álbumes Duo-nini</p>
                <h5>Todos los derechos reservados</h5>
            </footer>

            <Form>
                <Formulario/>
            </Form>

            <Button type="submit" className="mb-3">Enviar Información</Button>
        </>
    )
}

export default Footer