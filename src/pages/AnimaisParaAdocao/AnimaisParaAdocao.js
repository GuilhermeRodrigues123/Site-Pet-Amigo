import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import { Card, Row, Col, Collapse, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./animaisParaAdocao.css"


const vetorPets=[
    {
        nome: 'Nome: Usopp',
        idade: 'Idade: 1 ano',
        porte: 'Porte: Médio',
        especie: 'Espécie: Gato',
        imagem: './images/cat2.png',
    },
    {
        nome: 'Nome:    Leleco',
        idade: 'Idade:    6 meses',
        porte: 'Porte: Pequeno',
        especie: 'Espécie: Gato',
        imagem: './images/cat1.png',

    },
    {
        nome: 'Nome:    Bela',
        idade: 'Idade:    2 anos',
        porte: 'Porte: Médio',
        especie: 'Espécie: Cachorro',
        imagem: './images/dog1.png',
    },
    {
        nome: 'Nome:    Laika',
        idade: 'Idade: 4 anos',
        imagem: './images/dog2.png',
        especie: 'Espécie: Cachorro',
        porte: 'Porte: Grande',
    },
    {
        nome: 'Nome:    Lulu',
        idade: 'Idade:    3 anos',
        imagem: './images/cat4.png',
        especie: 'Espécie: Gato',
        porte: 'Porte: Grande',
    },
    {
        nome: 'Nome:    Isaac',
        idade: 'Idade:    8 anos',
        imagem: './images/dog3.png',
        especie: 'Espécie: Cachorro',
        porte: 'Porte: Grande',
    },

    {
        nome: 'Nome:    Isaac',
        idade: 'Idade:    8 anos',
        imagem: './images/dog3.png',
        especie: 'Espécie: Cachorro',
        porte: 'Porte: Grande',
    },
    {
        nome: 'Nome:    Isaac',
        idade: 'Idade:    8 anos',
        imagem: './images/dog3.png',
        especie: 'Espécie: Cachorro',
        porte: 'Porte: Grande',
    },
    
];

const vetorPets2=[
    {
        nome: 'Nome: Cleo',
        idade: 'Idade: 2 anos',
        porte: 'Porte: Pequeno',
        especie: 'Espécie: Gato',
        imagem: './images/cat5.png',
    },
    {
        nome: 'Nome:    Vader',
        idade: 'Idade:    7 anos',
        porte: 'Porte: Médio',
        especie: 'Espécie: Gato',
        imagem: './images/cat6.png',

    },
    {
        nome: 'Nome:    Pant',
        idade: 'Idade:    5 anos',
        porte: 'Porte: Grande',
        especie: 'Espécie: Cachorro',
        imagem: './images/dog5.png',
    },
    {
        nome: 'Nome:    Nina',
        idade: 'Idade:    4 anos',
        porte: 'Porte: Pequeno',
        especie: 'Espécie: Cachorro',
        imagem: './images/dog6.png',
    }
];

function AnimaisParaAdocao() {
    const history = useNavigate();
    const [open, setOpen] = useState(false);


    return (
        <div>
            <h1>Animais para adocao</h1>
            <button onClick={() => { history(-1); }}>
                retornar
            </button>
            <div className = "cardGrupo">
            <Container>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                    
                        <Card className = "cardStyle"
                            bg= 'warning'
                            text='dark'
                            style={{width: '21rem'}}>
                            <Card.Img variant="top"  src={vetorPets[idx].imagem}/>
                            <Card.Body>
                                <Card.Text>{vetorPets[idx].nome};  {vetorPets[idx].especie}</Card.Text>
                                <Card.Text>{vetorPets[idx].idade}</Card.Text>
                                <Card.Text>{vetorPets[idx].porte}</Card.Text>
                                <Button variant="primary">Favoritar</Button>{' '}
                            </Card.Body>
                        </Card>
                        
                    </Col>
                ))}
            </Row>
            </Container>
            </div>
        <div className = "showMoreB">
        <Button variant = "warning"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>
                Ver mais
      </Button>
      </div>

      <div style={{minHeight: '150px'}}>
        <Collapse in={open} dimension="width">
          <div className = "fundoGroupCard">
                
          <Container>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    
                        <Card className = "cardStyle"
                            bg= 'warning'
                            text='dark'
                            style={{width: '21rem'}}>
                            <Card.Img variant="top"  src={vetorPets2[idx].imagem}/>
                            <Card.Body>
                                <Card.Text>{vetorPets2[idx].nome};  {vetorPets2[idx].especie}</Card.Text>
                                <Card.Text>{vetorPets2[idx].idade}</Card.Text>
                                <Card.Text>{vetorPets2[idx].porte}</Card.Text>
                                <Button variant="primary">Favoritar</Button>{' '}
                            </Card.Body>
                        </Card>
                        
                    </Col>
                ))}
            </Row>
            </Container>

          </div>
        </Collapse>
      </div>

    </div>
    );
}

export default AnimaisParaAdocao;