import Form from "react-bootstrap/Form";


function Formulario({id, className = "mb-3", type = "text", placeholder, label}) {

    return(
        <Form.Group className={className} controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
            />
        </Form.Group>
    )
}

export default Formulario;