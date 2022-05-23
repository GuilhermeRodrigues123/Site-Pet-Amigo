import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./RecuperarSenha.css";
import "../../global.css";

function RecuperarSenha(){
    const history = useNavigate();
    const[cadUser, setCadUser] = useState([]);


return(

    <div className = "fundo1">
    <div className = "baseLaranja">
        <div className = "recText">
            <h1>Recuperar Senha:</h1>
        </div>

        <div className="texto1">Insira o email cadastrado que enviaremos as instruções para você recuperar sua senha. </div>
        <input type = "text" placeholder ="Email"></input>

        <div className = "buttonContent"><button className="cadbutton"
                onClick={()=>{alert("As instruções para redefinir sua senha foram enviadas ao seu email!")}}>ENVIAR</button></div>

        <div>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    </div>
    </div>
)
}

export default RecuperarSenha;