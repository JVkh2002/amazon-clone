import React, {useState} from 'react';
import { Header } from '../../components/Header'
import { YourAccountBox } from '../../components/YourAccountBox'
import { Footer } from '../../components/Footer'
import { Container, Background } from './styles';

const YourAccount = () => {
    
    const [filter, setFilter] = useState(false);

    return (
        <>
        <Header filtro={setFilter}/>

        <Background>
            <h2>Sua conta</h2>

            <Container>
            
                
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
        
            </Container>

        </Background>

        <Footer />

        </>
    )
}

export { YourAccount }