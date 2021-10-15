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

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders')
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
      toppings: ['pepperoni', 'sausage', 'mushroom', 'pepper'].filter(topping => !!formValues[topping])
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
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PizzaForm 
      values = {formValues}
      change = {inputChange}
      submit= {formSubmit}
      disabled= {disabled}
      errors= {formErrors}
      />
    </>
  );
};
export default App;
