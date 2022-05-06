import React from 'react';
import {useNavigate} from 'react-router-dom';
import{ Carousel} from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css";
import "./home.css"

function Home(){
    const history = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <Carousel className="paginaCarrossel" variant="dark">
                <Carousel.Item>
                    <img
                    className="carrosselImg"
                    src="/images/banner1.png"/>
                </Carousel.Item>

                 <Carousel.Item>
                    <img
                    className="carrosselImg"
                    src="/images/Carrossel2.png"/>
                </Carousel.Item>

            <Carousel.Item>
                <img
                className="carrosselImg"
                src="/images/carrossel3.png"/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    );
}

export default Home;