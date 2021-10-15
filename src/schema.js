import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name Required'),

    size: yup
        .string()
        .required('Size selection required'),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    pepper: yup.boolean(),
        
})

export default schema;