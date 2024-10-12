import { createSlice } from "@reduxjs/toolkit";

/* Creamos las variables de estado necesarias
- dataApi almacenara la información de la API
 */
const initialS = {
  dataApi : []
};

/* Creamos el reducer, confirmando el nombre que usaremos, las variables iniciales y las acciones a realizar en el llamado
- setApiData almacena la información de la data obtenida en la variable dataApi
*/
const reducers = createSlice({
  name: 'apiCommerce',
  initialState: initialS,
  reducers: {
    setApiData: ( state, action ) => {
      state.dataApi = action.payload;
    }
  }
})

export const { setApiData } = reducers.actions;
export default reducers.reducer;