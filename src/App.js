import React, {useState, useEffect} from "react";
import {Link, Route} from 'react-router-dom';
import PizzaForm from './Pizza Form';
import Home from './Home';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema';


const initialFormValues = {
  name: '',
  size: '',
  Pepperoni: false,
  Sausage: false,
  Mushroom: false,
  Pepper: false,
  Special:  '',
}

const initialFormErrors = {
  name: '',
  size: '',

}
const initialOrder = [];
const initialDisabled= true

const App = () => {

  const[order, setOrder] = useState(initialOrder);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);
  const[disabled, setDisabled] = useState(initialDisabled)

  
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
        setOrder([...order, res.data])
      }).catch(err => {
        console.error(err);
      }) 
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      // toppings: ['pepperoni', 'sausage', 'mushroom', 'pepper'].filter(topping => !!formValues[topping])
      Pepperoni: formValues.Pepperoni,
      Sausage: formValues.Sausage,
      Mushroom: formValues.Mushroom,
      Pepper: formValues.Pepper,
      Special: formValues.Special
    }
    postNewOrder(newOrder)
  }

  // useEffect(() => {
  //   getOrder()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className= 'nav links'>
          <Link to= '/'>Home</Link>
          <Link to= '/pizza'>Order</Link>
        </div>
        <p></p>
      </nav>

      <Route path= '/'>
        <Home />
        
      </Route>
      <Route path= '/pizza'>
        <PizzaForm 
          values = {formValues}
          change = {inputChange}
          submit= {formSubmit}
          disabled= {disabled}
          errors= {formErrors}
          />
      </Route>
    </>
  );
};
export default App;
