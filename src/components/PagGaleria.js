import { Button, Card, Col, Row } from "react-bootstrap";
import "./galeria.css";

function PagGaleria(props) {


  const apiData  = props.info;
  
  const image = {
    objectFit: 'cover'
  }
  
  return(
    <>
    <div className="container pb-4">
      { apiData ? (
        <div style={ { marginTop: '50px' } }>
        <Row xs={1} md={2} lg={3} className="g-4">
          {apiData.map((product) => (
            <Col key={product.id}>
              <Card style={ { width: '20rem' } } >
                  <Card.Header> { product.title } </Card.Header>
                  <Card.Img variant="top" className="d-block w-100" style={ image } src={ product.image } alt={ product.title }/>
                  <Card.Body>
                    <Card.Title>Product: {product.title}</Card.Title>
                    <Card.Text className="text-trunc">Description: {product.description}</Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Button>Ejemplo</Button>
                    <Button>Botones</Button>
                  </div>
                  </Card.Body>
                  <Card.Footer>Category: { product.category } </Card.Footer>
              </Card>
            </Col>
            )
          )}
        </Row>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
    </>
  )
}

export default PagGaleria;