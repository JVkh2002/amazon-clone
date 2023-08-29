import styled  from 'styled-components';
import banner from "../../assets/menu-banner.jpg";

export const Background = styled.div`

    width: 100%;
    height: 38vw;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url(${banner});
    background-size: cover;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
  
`

