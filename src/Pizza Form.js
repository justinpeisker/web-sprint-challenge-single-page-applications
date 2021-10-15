import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onChange = evt => {
        const {type, name, value, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked: value;
        change(name, valueToUse);
    }

    return (
        <form className= 'form container' onChange= {onChange} id= 'pizza-form'>
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
                    <select value= {values.size} name= 'size' onChange= {onChange} id= 'size-dropdown'>
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
            </div>
        </form>
    )
}