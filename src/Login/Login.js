import React, { useState } from 'react';
import{Form} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../global.css"
import "./login.css"

function Login() {

return(
    <div className = "fundo"> 
        <div className = "base1">
            <h2>Entrar</h2>
            <p></p>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Digite o seu email"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Digite a sua senha" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Mantenha-me conectado." />
  </Form.Group>
  <Button variant="primary" type="submit">
    Entrar
  </Button>
</Form>
</div>   
</div>
  );
}

export default Login;