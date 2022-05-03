import React,{ useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Cadastro(){
    const history = useNavigate();
    const[cadUser, setCadUser] = useState([]);

    function UpdateUser(event) {

    const key = event.target.name;

    const newCadUser = { ...cadUser };
    newCadUser[key] = event.target.value;
    setCadUser(newCadUser);
    console.log(newCadUser);
    }

    return (
        <div>
          <h1>Cadastro</h1>
          <input type="text" placeholder ="Nome" name ="nome"
                onChange={UpdateUser}/>
          {/* Setando a característica Nome do objeto*/}
            <p><input type="text" placeholder ="CPF" name = "cpf" 
                onChange={UpdateUser}/></p>
            <p><input type="text" placeholder ="Senha" name = "senha" 
                onChange={UpdateUser}/></p>
            <p><input type="text" placeholder ="Confirme sua senha" name = "confsenha" 
                onChange={UpdateUser}/></p>
            <p><input type="text" placeholder ="Email" name = "email" 
                onChange={UpdateUser}/></p>
            <p><input type="text" placeholder ="Telefone" name = "telefone" 
                onChange={UpdateUser}/></p>
            <p><input type="text" placeholder ="Endereço" name = "endereco" 
                onChange={UpdateUser}/></p>
          
            <button
            onClick={()=>{alert("Cadastro realizado com sucesso!")}}>Confirmar</button>
            <div>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
            </div>
        </div>
        )
    
}

export default Cadastro;