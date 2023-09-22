import styled from 'styled-components';

export const Voltar = styled.button`

    background-color: #37475A;
    border-style: none;

    width: 100%;
    height: 2.5rem; 

    color: white;
    justify-content: center;
    cursor: pointer;


`

export const BiggerContainer = styled.div`

    width: 100%;
    background-color: #232F3E;

    hr {

        margin-top: 3rem;
        margin-bottom: 3rem;
    }

    img {
        display: flex;

        margin-left: auto;
        margin-right: auto;
    }

    #paises {
        margin-top: 1rem;
        justify-content: space-around;
        display: flex;
        padding: -1rem 0rem;
    }

    span {
        color: lightgray;
        border-right: 1px solid white;
        padding: 0 0.8rem;
        font-size: 14px;
    }

`

export const Columns = styled.div`

    display: flex;
    flex-direction: row;

    margin: 0px 8rem;

    justify-content: space-around;

    div {
        margin-top: 3rem;
    }


    div > h3 {
        color: white;
    }

    div > ul > li {
        color: lightgray;
        list-style: none;
        margin-top: 0.8rem;
        width: 10rem;
    }

`