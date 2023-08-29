import React from "react"
import { Container, UnderContainer } from './styles';
import logo from '../../assets/logo-amazon.png'
import car from '../../assets/return-image.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from 'react-icons/bi'
import { RiArrowDownSFill } from 'react-icons/ri'

const Header = () => {
    return (
        <>
        <Container>
            <div className="image">
                <img src={logo} alt="Amazon logo"/>
            </div>
            
            <div className="pin">
                <SlLocationPin color="white" size={18}/>
                <div id="address">
                    <p id="send">Enviar para João</p>
                    <p>São Paulo ... 00000000</p>
                </div>
            </div>

            <div id="search">
                <button>Todos<RiArrowDownSFill/></button>
                <input placeholder="Pesquisa Amazon.com.br"></input>
                <button id="search-button"><BiSearch size={25}/></button>
            </div>

            <div id="your-account">
                <p id="hello">Olá, joão</p>
                <p>Contas e Listas</p>
            </div>

            <div id="return">
                <p id="hello">Devoluções</p>
                <p>e Pedidos</p>
            </div>

            <div className="image">
                <img src={car} alt=""/>
            </div>

        </Container>

        <UnderContainer>
            
            <div>
                <GiHamburgerMenu size={22} color="white"/>
                <p id="menu">Todos</p>
            </div>

            <p>Venda na Amazon</p>
            <p>Ofertas do Dia</p>
            <p>Livros</p>
            <p>Ideias de Presente</p>
            <p>Computadores</p>
            <p>eBooks</p>
            <p>Eletrônicos</p>

        </UnderContainer>
        </>
            
    )
}

export { Header }