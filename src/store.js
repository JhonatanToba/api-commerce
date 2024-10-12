import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

/* Realizamos la creación del store para hacer uso de variables de estado con REDUX */
const store = configureStore({
  reducer: {
    apiCommerce: reducers
  }
})

export default store;