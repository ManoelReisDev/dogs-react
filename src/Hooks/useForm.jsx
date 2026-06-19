import { useState } from "react";

const validationTypes = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: "A senha precisa ter 1 letra maiúscula, 1 letra minúscula, 1 número e no mínimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números.",
  }
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (
      validationTypes[type] &&
      !validationTypes[type].regex.test(value)
    ) {
      setError(validationTypes[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
