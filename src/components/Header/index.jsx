import React from "react"
import { Container, UnderContainer } from './styles';
import logo from '../../assets/logo-amazon.png'
import car from '../../assets/return-image.png'

const Header = () => {
    return (
        <>
        <Container>
            <img src={logo} alt="Amazon logo"/>
            
            <div id="address">
                <p id="send">Enviar para João</p>
                <p>São Paulo ... 00000000</p>
            </div>

            <div id="search">
                <button>Todos</button>
                <input placeholder="Pesquisa Amazon.com.br"></input>
                <button id="search-button">#</button>
            </div>

            <div id="your-account">
                <p id="hello">Olá, joão</p>
                <p>Contas e Listas</p>
            </div>

            <div id="return">
                <p id="hello">Devoluções</p>
                <p>e Pedidos</p>
            </div>

            <img src={car} alt=""/>

        </Container>
        <UnderContainer>

        </UnderContainer>
        </>
            
    )
}

export { Header }