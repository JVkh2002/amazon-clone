import React from 'react';
import card from '../../assets/credit-card.jpg'
import { Box, Container } from './styles'

const SmallBox = ({ type }) => {


    if (type == 1) {
        return (    
            <Container>
                <Box>
                    <h2>Chegou o novo cartão Amazon seu anuidade{(type) }</h2>
                    <img src={card} alt='credit card'/>
                    <a href='#'>Peça já seu cartão</a>
                </Box>
            </Container> 
        )
    }
    
    else if (type == 2) {

        return (
        <Container>
            <Box>
                <h2>Chegou o novo cartão Amazon seu anuidade{(type) }</h2>
                
                <a href='#'>Peça já seu cartão</a>
            </Box>
        </Container>
        )
    }
};

export { SmallBox }