import React,{ useState } from 'react';
import {useHistory} from 'react-router-dom';
import "./cadastro.css"

function Cadastro(){
    const history = useHistory();
    const[cadUser, setCadUser] = useState([]);

    function UpdateUser(event) {

    const key = event.target.name;

    const newCadUser = { ...cadUser };
    newCadUser[key] = event.target.value;
    setCadUser(newCadUser);
    console.log(newCadUser);
    }

    return (
        <div className = "fundo1">
            <div className = "base">
                <div className = "cadtext">
                    <h1>Cadastro</h1>
                </div>
                <div className="texto">Para criar sua conta, por favor preencha os dados abaixo: </div>
                <div className='dados'>
                    <input type="text" placeholder ="Nome" name ="nome"
                        onChange={UpdateUser}/>
                    {/* Setando a característica Nome do objeto*/}
                    <input type="text" placeholder ="CPF" name = "cpf" 
                        onChange={UpdateUser}/>
                    <input type="text" placeholder ="Senha" name = "senha" 
                        onChange={UpdateUser}/>
                    <input type="text" placeholder ="Confirme sua senha" name = "confsenha" 
                        onChange={UpdateUser}/>
                    <input type="text" placeholder ="Email" name = "email" 
                        onChange={UpdateUser}/>
                    <input type="text" placeholder ="Telefone" name = "telefone" 
                        onChange={UpdateUser}/>
                    <input type="text" placeholder ="Endereço" name = "endereco" 
                        onChange={UpdateUser}/>
                </div>
                <div className = "buttonContent"><button className="cadbutton"
                onClick={()=>{alert("Cadastro realizado com sucesso!")}}>CADASTRAR</button></div>
                
                <div>
                    <button onClick={() => {history.push(-1);}}>
                        retornar
                    </button>
                </div>
            </div>
        </div>
        )
    
}

export default Cadastro;