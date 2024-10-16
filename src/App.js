import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "./reducers";
import PagPrincipal from "./components/PagPrincipal";
import PagGaleria from "./components/PagGaleria";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PagContacto from "./components/PagContacto";

function App() {

  /* Indicamos las variables a usar 
  - disp para realizar cambio en las variables del estado 
  - URL definimos la url de api que haremos uso
  - data almacenara la información que trae la API
  */
  const disp = useDispatch();
  const data = useSelector( state => state.apiCommerce.dataApi );
  const URL = 'https://fakestoreapi.com/products';

  /* Creamos función para obtener los datos de la API */
  async function getData() {
    try {
      const rta = await axios.get( URL );
      /* Guardamos la respuesta en el reducer creado */
      disp( setApiData( rta.data ) );
    } catch (error) {
      /* Verificamos si hay errores en la petición */
      console.log('Error: ' + error.message);
    }
  }

  /* Hacemos uso de useEffect para que se ejecute el llamado a getData() y poder obtener la información de la API */
  useEffect( () => {
    getData();
  }, [])
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagPrincipal info={ data }/>}/>
          <Route path="/gallery" element={<PagGaleria info={ data }/>}/>
          <Route path="/contact" element={ <PagContacto/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
