import React, { useState,  useEffect } from 'react'; 
import { useHistory } from 'react-router-dom'; 
import { getUsuario_id } from '../../services/auth';
import "./meuPerfil.css";
import api from "../../services/api";
 
function MeuPerfil() { 
    const history = useHistory(); 
    const [dadoUsuario,setDadoUsuario] = useState();

  async function getDadosusuario() {
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

    useEffect(()=> {
        getDadosusuario();
    },[]);

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
                    <input className="dados" type="text" placeholder="Nome" value={dadoUsuario?.nome} name="nome" /> 
                    <input className="dados" type="text" placeholder="CPF" value={dadoUsuario?.cpf} name="cpf" /> 
                    <input className="dados" type="text" placeholder="Número de Telefone" value={dadoUsuario?.telefone} name="telefone" /> 
                    <input className="dados" type="text" placeholder="Endereço" value={dadoUsuario?.endereco} name="endereco" /> 
                </div> 
            </div> 
            <div className='meusPets'> 
                <img className="imagem" src="/images/petDesign.png"></img> 
                <h1 className="perfilText"> 
                    Meus Pets 
                </h1> 
            </div> 
        </div> 
 
    ); 
} 
 
export default MeuPerfil;