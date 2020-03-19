import React from "react";
import { RegisterForm } from "../components/RegisterForm";


//Essa constante recebe o título do formulário e as informações passadas pelo RegisterForm.
export const FormPage = () => (
    <div className="title">
        <h2>Cadastro de alunas</h2>
        <RegisterForm />
    </div>
);