import { useState } from "react";

export function useFormAndValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsvalid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsvalid(e.target.closest("form").checkValidity());
  };

  return { values, errors, isValid, handleChange, setValues, setIsvalid, setErrors };
}
