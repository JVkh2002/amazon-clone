import styled from 'styled-components';

export const Container = styled.div`
    background-color: #131921;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;

    align-items: center;

    img {
        margin-left: 0.7rem;
        cursor: pointer;  
    }

    #address {
        margin-left: 1rem;
        cursor: pointer;
        padding: 0.48rem;
    }

    p {
        color: white;
    }

    #send {
        color: gray;
        font-size: 12px;
    }

    #search {
        margin-left: 1.9rem; 
    }

    #search > button {
        padding: 0.8rem;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        border-style: none;
        cursor: pointer;
    }

    #search > input {
        padding: 0.8rem;
        width: 31rem;
        border-style: none
    }

    #search > #search-button {
        background-color: #F3A847;
        padding: 0.8rem;
        width: 2.5rem;
        border-top-right-radius: 0.4rem;;
        border-bottom-right-radius: 0.4rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0rem;
        border-style: none;
        cursor: pointer;
    }

    #your-account{
        margin-left: 1.8rem;
        cursor: pointer;
        padding: 0.38rem;
    }

    #your-account > #hello {
        font-size: 12px;
    }

    #return{
        margin-left: 1.8rem;
        margin-right: 1rem;
        cursor: pointer;
        padding: 0.4rem 0rem;
    }

    #return > #hello {
        font-size: 12px;
    }

    img:hover , #address:hover, search:hover, #your-account:hover, #return:hover {
        border: solid 1px white;
    }
    
`

export const UnderContainer = styled.div`
    background-color: #232F3E;
    width: 100%;
    height: 2.4rem;
`
