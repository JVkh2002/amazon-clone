import styled from 'styled-components';

export const Container = styled.div`
    background-color: #131921;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;

    .image {
        padding: 1.5px; 
        cursor: pointer;  
    }

    .pin {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.48rem;
    }

    #address {
        cursor: pointer;
        margin-left: 0.3rem;
    }

    p {
        color: white;
    }

    #send {
        color: gray;
        font-size: 12px;
    }


    #search > button {
        padding: 0.78rem 0.4rem;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        border-style: none;
        cursor: pointer;
        position: relative;
        top: 1px;
    }

    #search > button:hover {
        filter: brightness(0.8);
    }

    #lista {
        background-color: white;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        text-align: justify;

        position: absolute;
        top: 2.2rem;
        left: 0.2rem;
        width: 15rem;

        list-style: none;
    }

    #lista > li {
        padding: 0.1rem;
    }

    #lista > li:hover {
        background-color: #1E90FF;

    }

    #search > input {
        padding: 0.8rem;
        width: 31rem;
        border-style: none
    }

    #search > #search-button {
        background-color: #F3A847;
        padding: 0.41rem;
        width: 2.5rem;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0rem;
        border-style: none;
        cursor: pointer;

        position: relative;
        top: 7px;
    }

    #your-account{
        
        cursor: pointer;
        padding: 0.38rem;
    }

    #yourListMenu {
        background-color: white;

        display: flex;
        flex-direction: row;
        position: absolute;
        right: 13rem;
        
        list-style: none;
        width: 25rem;


    }

    #yourListMenu-right {
        border-left: solid 1px #9A9A9A;
        margin-left: 1rem;
    }

    #yourListMenu > ul > h3 {
        margin-left: 1.5rem;
        width: 11rem;
        margin-top: 0.8rem;
    }

    #yourListMenu > ul > li {
        margin: 0.5rem 0;
        margin-left: 1.5rem;
        list-style: none;
    }

    #your-account > #hello {
        font-size: 12px;
    }

    #return{
        
        cursor: pointer;
        padding: 0.4rem 0rem;
    }

    #return > #hello {
        font-size: 12px;
    }

    .image:hover , .pin:hover, search:hover, #your-account:hover, #return:hover {
        box-shadow: inset 0 0 0 1px white;
    }
    
`

export const UnderContainer = styled.div`
    background-color: #232F3E;
    width: 100%;
    height: 2.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    p {
        color: white;
        padding: 0.55rem;
    }

    p:hover, div:hover {
        box-shadow: inset 0 0 0 1px white;
        cursor: pointer;
    }

    #menu:hover {
        box-shadow: inset 0 0 0 1px transparent;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0rem 0.35rem;
    }

    div > p {
        margin-left: 4px;
    }




`
