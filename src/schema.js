import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2,'name must be at least 2 characters'),

    size: yup
        .string()
        .required('Size selection required'),

    Pepperoni: yup.boolean(),
    Sausage: yup.boolean(),
    Mushroom: yup.boolean(),
    Pepper: yup.boolean(),

    Special: yup
        .string()
        
})

export default schema;