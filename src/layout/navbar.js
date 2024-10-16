import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function BarNavigation() {
  
  return(
    <>
      <div className='sticky-top'>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Api Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/gallery">Galería</Nav.Link>
              <Nav.Link href="/contact">
                Contáctenos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    </>
  )

}

export default BarNavigation