import styled  from 'styled-components';
import banner from "../../assets/menu-banner.jpg";

export const Background = styled.div`

    width: 100%;
    height: 40vw;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(227, 230, 230, 0.8)), url(${banner});
    background-size: cover;

    display: flex;
    flex-direction: row;
    filter: ${props => (props.filter ?  "brightness(0.4)" : "brightness(1)")};
    
  
`


