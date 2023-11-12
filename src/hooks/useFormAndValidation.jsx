import { useState } from "react";

export function useFormAndValidation(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsvalid] = useState(false);

  const validate = (e, name, value) => {
    switch (name) {
      case "userName":
        if (/[0-9]/.test(value)) {
          setErrors({
            ...errors,
            userName: "Нельзя использовать числа",
          });
        } else if (/[!@#$%^&*()_/\\]/g.test(value)) {
          setErrors({
            ...errors,
            userName: "Не допускается использование специальных символов !@#$%^&*()_/\\",
          });
        } else if (value.match(/[-]/g)) {
          if (value.match(/[-]/g).length >= 2) {
            setErrors({
              ...errors,
              userName: "Не допускается использование более 1 тире",
            });
          }
          if (value.match(/[-]/g).length < 2) {
            setErrors({
              ...errors,
              userName: "",
            });
          }
        } else if (value.match(/\s/g)) {
          if (value.match(/\s/g).length >= 2) {
            setErrors({
              ...errors,
              userName: "Не допускается использование более 1 пробела",
            });
          }
          if (value.match(/\s/g).length < 2) {
            setErrors({
              ...errors,
              userName: "",
            });
          }
        } else if (/[A-Z][a-z][А-Я][а-я][Ё][ё]/gi.test(value)) {
          setErrors({
            ...errors,
            userName: "Можно использовать только кириллицу или латиницу",
          });
        } else if (value.length < 2 || value.length > 30) {
          setErrors({
            ...errors,
            userName: "Ваше имя должно быть не короче 2 и не более 30 символов",
          });
          if (value.length === 0) {
            setErrors({
              ...errors,
              userName: "Заполните поле",
            });
          }
        } else {
          setErrors({
            ...errors,
            userName: e.target.validationMessage,
          });
        }
        break;

      case "userSurname":
        if (/[0-9]/.test(value)) {
          setErrors({
            ...errors,
            userSurname: "Нельзя использовать числа",
          });
        } else if (/[!@#$%^&*()_/\\]/g.test(value)) {
          setErrors({
            ...errors,
            userSurname: "Не допускается использование специальных символов !@#$%^&*()_/\\",
          });
        } else if (value.match(/\s/g)) {
          if (value.match(/\s/g).length >= 2) {
            setErrors({
              ...errors,
              userSurname: "Не допускается использование более 1 пробела",
            });
          }
          if (value.match(/\s/g).length < 2) {
            setErrors({
              ...errors,
              userSurname: "",
            });
          }
        } else if (value.match(/-/g)) {
          if (value.match(/-/g).length >= 2) {
            setErrors({
              ...errors,
              userSurname: "Не допускается использование более 1 тире",
            });
          }
          if (value.match(/-/g).length < 2) {
            setErrors({
              ...errors,
              userSurname: "",
            });
          }
        } else if (/[A-Z][a-z][А-Я][а-я][Ё][ё]/gi.test(value)) {
          setErrors({
            ...errors,
            userSurname: "Можно использовать только кириллицу или латиницу",
          });
        } else if (value.length < 2 || value.length > 30) {
          setErrors({
            ...errors,
            userSurname: "Ваше имя должно быть не короче 2 и не более 30 символов",
          });
          if (value.length === 0) {
            setErrors({
              ...errors,
              userSurname: "Заполните поле",
            });
          }
        } else {
          setErrors({
            ...errors,
            userSurname: e.target.validationMessage,
          });
        }
        break;

      case "email":
        if (/[!#$%^&*()_/\\]/g.test(value)) {
          setErrors({
            ...errors,
            email: "Не допускается использование специальных символов !#$%^&*()_/\\",
          });
        } else if (/\s]/g.test(value)) {
          setErrors({
            ...errors,
            email: "Не допускается использование пробелов",
          });
        } else if (/[а-яА-ЯЁё]/g.test(value)) {
          setErrors({
            ...errors,
            email: "Допускается использование только латиницы",
          });
        } else if (value.length <= 6 || value.length > 256) {
          setErrors({
            ...errors,
            email: "Электронный адрес не должен быть короче 6 и длиннее 256 символов",
          });
          if (value.length === 0) {
            setErrors({
              ...errors,
              email: "Заполните поле",
            });
          }
        } else {
          setErrors({
            ...errors,
            email: e.target.validationMessage,
          });
        }
        break;

      case "password":
        if (/\s]/g.test(value)) {
          setErrors({
            ...errors,
            password: "Не допускается использование пробелов",
          });
        } else if (value.length <= 8 || value.length > 30) {
          setErrors({
            ...errors,
            password: "Пароль должен состоять не менее чем из 8 и не более 30 символов",
          });
          if (value.length === 0) {
            setErrors({
              ...errors,
              password: "Заполните поле",
            });
          }
        } else {
          setErrors({
            ...errors,
            password: e.target.validationMessage,
          });
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    validate(e, name, value);

    setValues({ ...values, [name]: value });
    setIsvalid(e.target.closest("form").checkValidity());
  };

  return { values, errors, isValid, handleChange, setValues, setIsvalid, setErrors };
}
