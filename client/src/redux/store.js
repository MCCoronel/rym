import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import reducer from "./reducer";

//esto lo hacemos para poder conectar mi proyecto con la extension del navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleWare))
); // esta linea sirve para poder hacer peticiones a una Api/servidor

export default store;
