import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function AnimaisParaAdocao() {
    const history = useHistory();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <h1>Animais para adocao</h1>
            <button onClick={() => { history(-1); }}>
                retornar
            </button>
        </div>
    );
}

export default AnimaisParaAdocao;