import React from 'react'


export default class FormPage extends React.Component {
    render(){
        return(
            <main>
                <RegisterForm />
            </main>
        )
    }
};


export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
    
    this.state = {
        name: '',
        city: '',
        email: '',
        cpf: '',
        phone: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    validateEmail(email){
        email.includes("@") && email.includes(".com");
    }

    handleSubmit(e){
        e.preventDefault();
        const {name, city, email, cpf, phone} = this.state;

        if(this.validateEmail(email) === false){
            return alert("Por favor, insira um e-mail válido.");
        }
        if(name === '' || city === '' || email === '' || cpf === '' || phone === ''){
            return alert("Todos os campos devem ser preenchidos.");
        }
    }    

    render(){
        console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="title">
                    <h3>Cadastro de Alunas</h3>
                </div>
                <FormInput 
                    value={this.state.name} 
                    name="name" 
                    onChange={this.handleInputChange} 
                    label="Nome Completo"/>
                <FormInput 
                    value={this.state.city} 
                    name="city" 
                    onChange={this.handleInputChange} 
                    label="Cidade"/>
                <FormInput 
                    value={this.state.email} 
                    name="email" 
                    onChange={this.handleInputChange} 
                    label="E-mail"
                    placeholder="email@email.com"/>
                <FormInput 
                    value={this.state.cpf} 
                    name="cpf" 
                    onChange={this.handleInputChange} 
                    label="CPF"
                    placeholder="000.000.000-00"/>
                <FormInput 
                    value={this.state.phone} 
                    name="phone" 
                    onChange={this.handleInputChange} 
                    label="Telefone"
                    placeholder="(xx) xxxxx-xxxx"/>                    
                <SubmitButton />
            </form>
        )
    }
};

export class FormInput extends React.Component {

    render(){
        return(
            <div>
                <div className="formInput">
                    <label>{this.props.label}</label><br />
                    <input 
                        type="text" 
                        name={this.props.name} 
                        value={this.props.value}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder}/>
                </div>
            </div>
        )
    }
};

export class SubmitButton extends React.Component {

    render(){
        return (
            <div >
                <button 
                    type="submit" 
                    className="submitButton"
                    name="button"
                    value={this.props.button}
                    onClick={this.handleSubmit}
                    >Inscrever</button>
            </div>
        )
    }
}
