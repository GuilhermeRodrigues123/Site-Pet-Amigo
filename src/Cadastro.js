import React, { useState } from 'react';

function Cadastro() {

  const[cadUser, setCadUser] = useState([]);

  function UpdateUser(event) {

    const key = event.target.name;
    const newCadUser = { ...cadUser };
    
    newCadUser[key] = cadUser[key];

    setCadUser(newCadUser);
    console.log(newCadUser);

  }
  
  /*function BotaoCadastro(){
    if(senha !== confsenha){
      alert("As senhas não conferem.");
      return;
    }else
      alert("Cadastro realizado com sucesso!");
  }*/

  return (
    <div>
      <h1>Cadastro</h1>
      <input type="text" placeholder ="Nome" name ="nome"
            onChange={UpdateUser}/>
      {/* Setando a característica Nome do objeto*/}
      <p><input type="text" placeholder ="CPF" name = "cpf" 
            onChange={UpdateUser}/></p>
      <p><input type="text" placeholder ="Senha" name = "senha." 
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
        onClick={()=>{alert("Cadastro realizado com sucesso!")}}>clique</button>
    </div>
    )
  }

export default Cadastro;
