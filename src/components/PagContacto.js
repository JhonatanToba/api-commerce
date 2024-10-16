import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function PagContacto() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='container py-5'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">Por favor ingrese su nombre</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">Por favor ingrese su apellido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Indique su usuario
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Indique la ciudad
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br/>
      <InputGroup hasValidation>
        <InputGroup.Text>Comments</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" isInvalid={validated}/>
        <Form.Control.Feedback type="invalid">
            Por favor indique sus comentarios
        </Form.Control.Feedback>
      </InputGroup>
      <br/>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="¿Acepta los términos y condiciones'"
          feedback="Acepte los términos y condiciones"
          feedbackType="invalid"
        />
      </Form.Group>
      <br/>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  );
}

export default PagContacto;