import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUsuario_id } from '../../services/auth';
import "./meuPerfil.css";
import api from "../../services/api";

function MeuPerfil() {
    const history = useHistory();
    const [dadoUsuario, setDadoUsuario] = useState();
    const [newDadoUsuario, setNewDadoUsuario] = useState();
    const [dadoFavoritar, setDadoFavoritar] = useState();

    async function getFavoritos() {
        try {
            const usuario_id = getUsuario_id();
            const response = await api.get(`/favoritos/${usuario_id}`)
            setDadoFavoritar(response.data);
        } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }

    async function getDadosUsuario() {
        try {
            const usuario_id = getUsuario_id();
            const response = await api.get(`/usuarios/${usuario_id}`);
            setDadoUsuario(response.data);
        } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        return setNewDadoUsuario({ ...newDadoUsuario, [name]: value });
    }

    async function updateUsuario() {
        try {
            const usuario_id = getUsuario_id();
            const response = await api.put(`/usuarios/${usuario_id}`, newDadoUsuario);
            console.log(response);
        }
        catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }




    useEffect(() => {
        getDadosUsuario();
        getFavoritos();
    }, []);

    return (
        <div className="mae">
            <div className="meuPerfil">
                <img className="imagem" src="/images/perfil.png"></img>
                <h1 className="perfilText">
                    Meu Perfil
                </h1>
                <div className="perfilSubtext">
                    Meus dados de cadastro
                </div>
                <div className='dadosPerfil'>
                    <input className="dados" type="text" placeholder="Nome" defaultValue={dadoUsuario?.nome} onChange={handleChange} name="nome" />
                    <input className="dados" type="text" placeholder="CPF" defaultValue={dadoUsuario?.cpf} onChange={handleChange} name="cpf" />
                    <input className="dados" type="text" placeholder="Número de Telefone" defaultValue={dadoUsuario?.telefone} onChange={handleChange} name="telefone" />
                    <input className="dados" type="text" placeholder="Endereço" defaultValue={dadoUsuario?.endereco} onChange={handleChange} name="endereco" />
                </div>
                <button className="cadbutton" onClick={(updateUsuario)} >Alterar Dados</button>
            </div>
            <div className='meusPets'>
                <img className="imagem" src="/images/petDesign.png"></img>
                <h1 className="perfilText">
                    Meus Pets
                </h1>
                <div className='minicard'>
                    <h1 className='nome_pet'>dogao  </h1>
                    <div>
                        <h1>cachorro  </h1>
                        <h1>10 anos  </h1>
                        <h1>medio  </h1>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default MeuPerfil;