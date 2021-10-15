import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as yup from 'yup';


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
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
