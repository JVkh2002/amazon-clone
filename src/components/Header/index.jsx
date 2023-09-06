import React, {useState} from "react"
import { Container, UnderContainer } from './styles';
import logo from '../../assets/logo-amazon.png'
import car from '../../assets/return-image.png'
import { GiHamburgerMenu} from 'react-icons/gi';
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from 'react-icons/bi'
import { RiArrowDownSFill } from 'react-icons/ri'

const Header = () => {

    const [sectionMenu, setSectionMenu] = useState(true);

    const showSectionMenu = () => {
        console.log(sectionMenu)

        setSectionMenu(!sectionMenu);
    };


    const [yourListMenu, setYourListMenu] = useState(false);

    const showYourListMenu = () => {
        console.log(yourListMenu)

        setYourListMenu(true);
    };

    const closeYourListMenu = () => {
        console.log(yourListMenu)

        setYourListMenu(false);
    };

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
                
                <button id="listButton" onClick={showSectionMenu}>Todos<RiArrowDownSFill/>
                    {sectionMenu  ? null : (
                        <ul id="lista">
                            <li>Todos os departamentos</li>
                            <li>Eletrônicos</li>
                            <li>Livros</li>
                            <li>Ebooks</li>
                        </ul>)
                    }     
                </button>

                <input placeholder="Pesquisa Amazon.com.br"></input>
                <button id="search-button"><BiSearch size={25}/></button>
            </div>

            <div id="your-account" onMouseOver={showYourListMenu} onMouseOut={closeYourListMenu}>
                <p id="hello">Olá, joão</p>
                <p>Contas e Listas</p>
                
                {yourListMenu === true ? (
                    <div id="yourListMenu">

                        <ul>
                            <h3>Suas listas</h3>
                            <li>Lista de compras</li>
                            <hr></hr>
                            <li>Criar sua lista de compras</li>  
                        </ul> 

                        <ul id="yourListMenu-right">
                            <h3>Sua conta</h3>
                            <li>Sua conta</li>
                            <li>Seus pedidos</li>  
                        </ul>  
                    </div> 
                ) : null }
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