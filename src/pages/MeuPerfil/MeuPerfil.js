import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUsuario_id } from '../../services/auth';
import "./meuPerfil.css";
import api from "../../services/api";

function MeuPerfil() {
    const history = useHistory();
    const [dadoUsuario, setDadoUsuario] = useState();
    const [newDadoUsuario, setNewDadoUsuario] = useState();

    async function getDadosUsuario() {
        try {
            const usuario_id = getUsuario_id();
            console.log(usuario_id);
            const response = await api.get(`/usuarios/${usuario_id}`);
            setDadoUsuario(response.data);
            console.log(response);
        } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }

    async function getFavoritos(){
        try {
            const usuario_id = getUsuario_id();
            console.log(usuario_id);
            const response = await api.get(`/favoritos/${usuario_id}` );
            setDadoUsuario(response.data);
            console.log(response);
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
                <input></input>
                <img className="imagem" src="/images/petDesign.png"></img>
                <h1 className="perfilText">
                    Meus Pets
                </h1>
            </div>
        </div>

    );
}

export default MeuPerfil;