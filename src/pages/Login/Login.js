import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import{Form} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import "./login.css"

function Login(){
    const history = useNavigate();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  /*const history = useHistory();

  function logar(){

    if(email === "teste@teste.com" && senha === "abc"){
    alert("Bem vindo\n" + email);
    history.push("home");
    }else alert("Dados incorretos!");
  }*/
    return (
        <div className = "fundo"> 
    <div className = "base1">
        <h2>Entrar</h2>
          <p></p>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" placeholder="Digite o seu email"
        onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Senha</Form.Label>
      <Form.Control type="password" placeholder="Digite a sua senha" 
        onChange={(e)=>setSenha(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Mantenha-me conectado." />
    </Form.Group>

  <Button variant="primary" type="submit" /*onClick={(logar)}*/>
    Entrar
  </Button>

  </Form>
  <button onClick={() => {history(-1);}}>
                retornar
            </button>
    </div>   
  </div>


    );
}

export default Login;







