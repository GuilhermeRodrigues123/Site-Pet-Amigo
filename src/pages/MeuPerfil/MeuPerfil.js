import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./meuPerfil.css"

function MeuPerfil() {
    const history = useHistory();
    return (
        <div className="fundo1">
            <div className="base2">
                <div className="perfilText">
                    Meu Perfil
                </div>
                <div className="perfilSubtext">
                    Meus dados de cadastro
                </div>

                <input className="inputPerfil" type="text" placeholder="CPF" name="cpf" />
                <input className="inputPerfil" type="text" placeholder="Senha" name="senha" />
                <input className="inputPerfil" type="text" placeholder="Confirme sua senha" name="confsenha" />
                <input className="inputPerfil" type="text" placeholder="Email" name="email" />
                <input className="inputPerfil" type="text" placeholder="Telefone" name="telefone" />
                <input className="inputPerfil" type="text" placeholder="Endereço" name="endereco" />

            </div>
        </div>

    );
}

export default MeuPerfil;