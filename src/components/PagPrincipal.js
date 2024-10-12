import { Carousel } from "react-bootstrap";
import "../app.css";

function pagPrincipal(props) {

  const products = props.info;
  const image = {
    height: '755px',
    objectFit: 'cover'
  }
  return(
    <>
      <div className="container mt-5">
      <Carousel fade data-bs-theme="dark">
        {
          products.map( ( p, i) => (
            <Carousel.Item key={i} interval={2000}>
              <img className="d-block w-100" src={p.image}  style={ image } alt={p.title}/>
              <Carousel.Caption>
                <h3> { p.title } </h3>
                <p> { p.category } </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
      </div>
      
      <br/>
    </>
  )
}

export default pagPrincipal;