import { useState } from 'react';

const useForm = (initialState={},callback) => {

  const [values, setValues] = useState(initialState);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  const handleClearValues = () =>{
    setValues(initialState);
  }
  return {
    handleChange,
    handleSubmit,
    handleClearValues,
    values,
  }
};

export default useForm;