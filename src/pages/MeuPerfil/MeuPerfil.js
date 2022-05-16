import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./meuPerfil.css"

function MeuPerfil(){
    const history = useNavigate();
    return (
        <div className = "mae">
            <div className = "meuPerfil">
                <img className="imagem" src = "/images/perfil.png"></img>
                <h1 className = "perfilText">
                    Meu Perfil
                </h1>
                <div className = "perfilSubtext">
                    Meus dados de cadastro
                </div>
                <div className='dadosPerfil'>
                    <input className="dados" type="text" placeholder ="Nome" name = "nome"/>
                    <input className="dados" type="text" placeholder ="CPF" name = "cpf"/>
                    <input className="dados" type="text" placeholder ="Senha" name = "senha"/>
                    <input className="dados" type="text" placeholder ="Número de Telefone" name = "telefone"/>
                    <input className="dados" type="text" placeholder ="Email" name = "email"/>
                    <input className="dados" type="text" placeholder ="Endereço" name = "endereco"/>
                </div>

                <button onClick={() => {history(-1);}}>
                    retornar
                </button>
            </div>
            <div className='meusPets'>
                <img className="imagem" src="/images/petDesign.png"></img>
                <h1 className = "perfilText">
                   Meus Pets
                </h1>
            </div>
        </div>

    );
}

export default MeuPerfil;