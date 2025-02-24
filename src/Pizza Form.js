import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onChange = evt => {
        const {type, name, value, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form id= 'pizza-form' className= 'form container' onSubmit= {onSubmit} >
            <div className= 'form inputs'>
                <label>Name
                    <input
                        type= 'text'
                        name= 'name'
                        value= {values.name}
                        onChange= {onChange}
                        placeholder= 'Enter Your Name'
                        id= 'name-input'
                        />
                </label>

                <label>Size
                    <select id= 'size-dropdown' value= {values.size} name= 'size' onChange= {onChange} >
                        <option value= ''> -- select a size --</option>
                        <option value= 'Large'>Large</option>
                        <option value= 'Medium'>Medium</option>
                        <option value= 'Small'>Small</option>
                    </select>
                </label>

                <label>Pepperoni
                    <input
                        type= 'checkbox'
                        name= 'Pepperoni'
                        checked= {values.pepperoni}
                        onChange= {onChange}
                    />
                </label>

                <label>Sausage
                    <input
                        type= 'checkbox'
                        name= 'Sausage'
                        checked= {values.sausage}
                        onChange= {onChange}
                    />
                </label>

                <label>Mushroom
                    <input  
                        type= 'checkbox'
                        name= 'Mushroom'
                        checked= {values.mushroom}
                        onChange= {onChange}
                    />
                </label>

                <label>Pepper
                    <input
                        type= 'checkbox'
                        name= 'Pepper'
                        checked= {values.pepper}
                        onChange= {onChange}
                    />
                </label>

                <label>Special Instructions
                    <input  
                        id= 'special-text'
                        type= 'text'
                        name= 'Special'
                        value= {values.special}
                        onChange= {onChange}
                        />
                </label>
            </div>
            <div className= 'form submit'>
                <button id= 'order-button' disabled= {disabled}>Place Order</button>
                <div className= 'errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>    
        </form>
    )
}