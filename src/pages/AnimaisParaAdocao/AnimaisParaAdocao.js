import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import { Card, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const vetorPets=[
    {
        nome: 'Nome:    Usopp',
        idade: 'Idade:    1 ano',
        imagem: './images/cat1',
    },
    {
        nome: 'Nome:    Leleco',
        idade: 'Idade:    6 meses',
        imagem: './images/cat2',
    },
    {
        nome: 'Nome:    Bela',
        idade: 'Idade:    2 anos',
        imagem: './images/dog1',
    },
    {
        nome: 'Nome:    laika',
        idade: 'Idade: 1 ano',
        imagem: './images/dog2',
    }
];

function AnimaisParaAdocao() {
    const history = useNavigate();
    return (
        <div>
            <h1>Animais para adocao</h1>
            <button onClick={() => { history(-1); }}>
                retornar
            </button>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card 
                            bg= 'warning'
                            border= 'danger'
                            text='dark'
                            style={{ width: '18rem' }}>
                            <Card.Img variant="top"  src={vetorPets[idx].imagem}/>
                            <Card.Body>
                                <Card.Text>{vetorPets[idx].nome}</Card.Text>
                                <Card.Text>{vetorPets[idx].idade}</Card.Text>
                                <Button variant="primary">Adote!</Button>{' '}
                                <Button variant="outline-primary">Saiba mais</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default AnimaisParaAdocao;