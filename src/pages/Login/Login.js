import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import "./login.css"
import api from "../../services/api";
import {login} from "../../services/auth";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


  async function logar(e) {
      e.preventDefault();
      try {
        console.log(email,senha);
        const response = await api.post("/login", {email, senha});
        alert("Bem Vindo");
        console.log(response);
        login(response.data);
        history.push("/home");
      } catch (error) {
        console.log("deu erro");
        console.warn(error);
        alert(error.message);
      }

  }

  return (

    <div className="mom">

      <div className="cadastro">
        <img className="imagem" src="/images/img1.png"></img>
        <div className="textoCad">
          <h1>Bem vindo!</h1>
          <p1>Para acessar suas informações, por favor, entre em sua conta.</p1>
          <p></p>
          <p2>Não tem uma conta? Clique aqui!</p2>
        </div>
        <div className="buttonContent"><button className="cadastroButton" onClick={() => { history.push("/cadastro"); }}> Cadastre-se</button></div>
      </div>

      <div className="login">
        <h1> Entrar</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite a sua senha"
              onChange={(e) => setSenha(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Mantenha-me conectado." />
          </Form.Group>

          <Button className="loginButton" variant="primary" type="submit" onClick={(logar)}>
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;







