import React from "react";


//A constante FormInput vai "usar" as informações passadas de label, placeholder, inputType, value, handleChange e name.
export const FormInput = ({
    label,
    placeholder,
    inputType,
    value,
    handleChange,
    name
}) => {
  const handleInputChange = e => {
    handleChange(e.target.name, e.target.value);
  };

  //O handleInputChange avisa o componente pai, caso haja alguma alteração no estado do componente filho. Ou seja, cada vez que um campo do formulário for preenchido com alguma informação, o handleChange informa ao componente pai que aquele campo sofreu alteração.
  return (
        <div className="formInput">
            <label className="label-input">{label}</label>
            <input
                value={value}
                name={name}
                type={inputType}
                placeholder={placeholder}
                onChange={handleInputChange}
            ></input>
        </div>
  );
};
//Retorna um label e input básico/padrão que será utilizado para cada campo do formulário.