import { Header } from "../../components/Header";
import { SmallBox } from "../../components/small-box";
import { SmallBox2 } from "../../components/small-box-2";
import { LongBox } from "../../components/long-box";
import { Poster } from "../../components/Poster";
import { Background } from "./styles"

const Home = () => {
    return (
        <>
        <Header />
        <Background>
            <SmallBox />
            <SmallBox />
            <SmallBox />
            <SmallBox />
        </Background> 

        <Poster/>
        <SmallBox2/>
        <SmallBox2 type={2}/>

        <LongBox/>

        <SmallBox2 type={2}/>
        <SmallBox2/>
        <SmallBox2/>
        <SmallBox2/>

        
        

        
        </>
    )
}

export { Home }