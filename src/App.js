import React, {useState, useEffect} from "react";
import PizzaForm from './Pizza Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushroom: false,
  pepper: false,
  special:  '',
}

const initialOrder = [];

const App = () => {

  const[order, setOrder] = useState(initialOrder);
  const[formValues, setFormValues] = useState(initialFormValues);


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PizzaForm values = {formValues}/>
    </>
  );
};
export default App;
