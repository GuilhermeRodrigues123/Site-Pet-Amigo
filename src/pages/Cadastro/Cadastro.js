import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./cadastro.css";
import api from "../../services/api";
import {cadastro} from "../../services/auth";


function Cadastro() {
    const history = useHistory();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [senha, setSenha] = useState();
    const [confsenha, setConfsenha] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [endereco, setEndereco] = useState();
   
   /*const [cadUser, setCadUser] = useState([]); 

    function UpdateUser(event) {

        const key = event.target.name;

        const newCadUser = { ...cadUser };
        newCadUser[key] = event.target.value;
        setCadUser(newCadUser);
        console.log(newCadUser);
    }*/
        
    
    async function cadastrar(e) {
        e.preventDefault();
        if(senha === confsenha){
            try {
            console.log(nome, cpf, senha, email, telefone, endereco);
            const response = await api.post("/usuarios", {nome, cpf, senha, email, telefone, endereco});
            
            alert("Cadastrado");
            cadastro(response.data.accessToken);
            history.push("/home");
            } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
            }
        }else{
            alert("Senhas não são iguais.");
        }
    }

    return (
        <div className="fundo1">
            <div className="base">
                <div className="cadtext">
                    <h1>Cadastro</h1>
                </div>
                <div className="texto">Para criar sua conta, por favor preencha os dados abaixo: </div>
                <div className='dados'>
                    <input type="text" placeholder="Nome" name="nome"
                        onChange={(e) => setNome(e.target.value)} />
                    {/* Setando a característica Nome do objeto*/}
                    <input type="text" placeholder="CPF" name="cpf"
                        onChange={(e) => setCpf(e.target.value)}/>
                    <input type="text" placeholder="Senha" name="senha"
                        onChange={(e) => setSenha(e.target.value)} />
                    <input type="text" placeholder="Confirme sua senha" name="confsenha"
                        onChange={(e) => setConfsenha(e.target.value)} />
                    <input type="text" placeholder="Email" name="email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Telefone" name="telefone"
                        onChange={(e) => setTelefone(e.target.value)} />
                    <input type="text" placeholder="Endereço" name="endereco"
                        onChange={(e) => setEndereco(e.target.value)} />
                </div>
                <div className="buttonContent"><button className="cadbutton"
                    onClick={(cadastrar)}>CADASTRAR</button>
                </div>

            </div>
        </div>
    )

}

export default Cadastro;