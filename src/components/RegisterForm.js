import React from "react";
import { FormInput } from "../components/FormInput";
//importa o FormInput pra ser usado nesse componente.



export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        name: "",
        city: "",
        email: "",
        cpf: "",
        phone: ""
    };
  }
  //Inicia o componente com o estado vazio. Esse é o estado padrão do formulário.


  handleChange = (name, value) => this.setState({ [name]: value });
  //Lida com as alterações recebidas cada vez que um campo do formulário é preenchido.


  validateEmail = email => email.includes("@") && email.includes(".");
  //Essa variável é usada para validar o campo e-mail, que deve conter @ e . como obrigatórios.


  handleSubmit = event => {
    event.preventDefault();

    const { name, city, email, cpf, phone } = this.state;

    if (!this.validateEmail(email)) {
      return alert("Por favor, insira um e-mail válido.");
    }
    if(name === '' || city === '' || email === '' || cpf === '' || phone === ''){
        return alert("Todos os campos devem ser preenchidos.");
    }
  };
  //O handleSubmit para o envio do formulário e testa se as condições passadas através dos if estão atendidas. Nesse caso, confere se o e-mail inserido é válido e se nenhum campo está vazio, usando o estado inicial (vazio) para fazer as verificações.


  render() {
    console.log(this.state)
    return (
        <form onSubmit={this.handleSubmit}>
            <FormInput
                label="Nome Completo"
                value={this.state.name}
                handleChange={this.handleChange}
                name="name"
            />
            <FormInput
                label="Cidade"
                value={this.state.city}
                handleChange={this.handleChange}
                name="city"
            />
            <FormInput
                inputType="email"
                label="E-mail"
                placeholder="email@email.com"
                value={this.state.email}
                handleChange={this.handleChange}
                name="email"
            />
            <FormInput
                label="CPF"
                placeholder="000.000.000-00"
                value={this.state.cpf}
                handleChange={this.handleChange}
                name="cpf"
            />
            <FormInput
                label="Telefone"
                placeholder="(xx) xxxxx-xxxx"
                value={this.state.phone}
                handleChange={this.handleChange}
                name="phone"
            />
        <button type="submit" className="submitButton">Increver</button>
      </form>
    );
  }
}

//Nesse caso, não foi usado um componente específico para o botão.