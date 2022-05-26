import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import "./contato.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel'

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  //const [senha, setSenha] = useState();

  /*const history = useHistory();

  function logar(){

    if(email === "teste@teste.com" && senha === "abc"){
    alert("Bem vindo\n" + email);
    history.push("home");
    }else alert("Dados incorretos!");
  }*/

  return (
    <div className="mom">
      <div className="cadastro">
        <img className="imagem" src="/images/img1.png"></img>
        <div className="textoCad">
          <h1>Entre em contato com a gente!</h1>
          <p1>Dica: Enviar uma mensagem para a Pet Amigo é bem simples, basta escrever sua mensagemno naquela caixinha ali do lado.
            Depois disso é só escrever seu endereço de e-mail e clicar em "enviar".</p1>
          <br />
          <p2>Estamos eperando anciosamente para ouvir a sua opinião!</p2>
        </div>
      </div>
      <div className="login">
        <h1>Digite sua mensagem aqui!</h1>
        <Form>
          <FloatingLabel controlId="floatingTextarea2" label="E-mail">
            <Form.Control
              as="textarea"
              placeholder="Escreva seu email aqui!"
              style={{ height: '5rem' }}
            />
            <br />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comentário">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '12.5rem' }}
            />
          </FloatingLabel>
          <Button className="loginButton" variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        <button onClick={() => { history(-1); }}>
          retornar
        </button>
      </div>
      <div className="redes-sociais">
        <div className="textoCad">
          <h1>Visite nossas redes sociais</h1>
          <p1>Instagram: instagram.com/@PetAmigoOficial</p1>
          <br />
          <br />
          <p2>Youtube: youtube.com/PetAmigoOficial</p2>
          <br />
          <br />
          <p2>Whattsapp: +55 31 9 8765-4321</p2>
        </div>
      </div>
    </div>
  );
}

export default Login;







