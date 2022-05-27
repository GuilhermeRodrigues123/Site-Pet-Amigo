import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUsuario_id } from '../../services/auth';
import "../../global.css"
import { Card, Row, Col, Collapse, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./animaisParaAdocao.css"
import api from "../../services/api";


const vetorPets = [
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

const vetorPets2 = [
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
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [pet, setPet] = useState({});
    const [_todosPets, set_todosPets] = useState([]);


    async function getFavoritos() {
        try {
            const response = await api.get(`/pets/petall`)
            set_todosPets(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }

    async function favoritarPet(pet_id) {
        try {
            console.log();
            const usuario_id = getUsuario_id();
            const response = await api.post("/favoritos", { usuario_id, pet_id });
            alert("Favoritado");
            // cadastro(response.data.accessToken);
        } catch (error) {
            console.log("deu erro");
            console.warn(error);
            alert(error.message);
        }
    }

    useEffect(() => {
        getFavoritos();
    }, []);

    return (
        <div>

            <h1>Animais para adocao</h1>
            <button onClick={() => { history(-1); }}>
                retornar
            </button>
            <div className='geral'>
                <div className="cardGrupo3">
                    <Container>
                        <Row xs={1} md={3} className="g-4">
                            {_todosPets.map((value) => (
                                <Col>
                                    <Card className="cardStyle"
                                        bg='warning'
                                        text='dark'
                                        key={value.pet_id}>
                                        <Card.Img variant="top" src={`./images/${value.especie}.png`} />
                                        <Card.Body>
                                            <Card.Text> NOME: {value.nome}</Card.Text>
                                            <Card.Text> ESPECIE: {value.especie} </Card.Text>
                                            <Card.Text> IDADE: {value.idade} anos</Card.Text>
                                            <Card.Text> PORTE: {value.porte}</Card.Text>
                                            <Button variant="primary" onClick={() => favoritarPet(value.pet_id)}>Favoritar</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className="cardGrupo2">
                    <Container>
                        <Row xs={1} md={2} className="g-4">
                            {_todosPets.map((value) => (
                                <Col>
                                    <Card className="cardStyle"
                                        bg='warning'
                                        text='dark'
                                        key={value.pet_id}>
                                        <Card.Img variant="top" src={`./images/${value.especie}.png`} />
                                        <Card.Body>
                                            <Card.Text>{value.nome};  {value.especie}</Card.Text>
                                            <Card.Text>{value.idade}</Card.Text>
                                            <Card.Text>{value.porte}</Card.Text>
                                            <Button variant="primary" onClick={() => favoritarPet(value.pet_id)}>Favoritar</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className="cardGrupo1">
                    <Container>
                        <Row xs={1} md={1} className="g-4">
                            {_todosPets.map((value) => (
                                <Col>
                                    <Card className="cardStyle"
                                        bg='warning'
                                        text='dark'
                                        key={value.pet_id}>
                                        <Card.Img variant="top" src={`./images/${value.especie}.png`} />
                                        <Card.Body>
                                            <Card.Text>{value.nome};  {value.especie}</Card.Text>
                                            <Card.Text>{value.idade}</Card.Text>
                                            <Card.Text>{value.porte}</Card.Text>
                                            <Button variant="primary" onClick={() => favoritarPet(value.pet_id)}>Favoritar</Button>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

                {/* <div style={{ minHeight: '400px' }}>
                    <Collapse in={open} dimension="width">
                        <div className="fundoGroupCard">
                            <Container>
                                <Row xs={1} md={3} className="g-4">
                                    {_todosPets.map((value) => (
                                        <Col>
                                            <Card className="cardStyle"
                                                bg='warning'
                                                text='dark'
                                                key={value.pet_id}>
                                                <Card.Img variant="top" src={value.imagem} />
                                                <Card.Body>
                                                    <Card.Text>{value.nome};  {value.especie}</Card.Text>
                                                    <Card.Text>{value.idade}</Card.Text>
                                                    <Card.Text>{value.porte}</Card.Text>
                                                    <Button variant="primary" onClick={() => favoritarPet(value.pet_id)}>Favoritar</Button>
                                                </Card.Body>
                                            </Card>

                                        </Col>
                                    ))}
                                </Row>
                            </Container>

                        </div>
                    </Collapse>
                </div>
                <div className="showMoreB">
                    <Button variant="warning"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                        Ver mais
                    </Button>
                </div> */}
            </div>

        </div>
    );
}

export default AnimaisParaAdocao;