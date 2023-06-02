import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

 
import { Provider } from 'react-redux';
 
import {createStore, applyMiddleware} from 'redux';
import  thunk from 'redux-thunk';
import rootReducer from './reducers/index';



const logger  = ({dispatch, getState}) =>(next) =>(action)=> {
  
  if(typeof action !== 'function'){
    console.log('ACTION',action);
  }
  next(action)} ;



//below will call the movies reducer
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);





ReactDOMClient.createRoot(document.getElementById("root")).render(<Provider store={store}>
   
    <App   />
  
 </Provider>);

