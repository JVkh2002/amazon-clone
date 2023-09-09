import { Header } from "../../components/Header";
import { SmallBox } from "../../components/small-box";
import { SmallBox2 } from "../../components/small-box-2";
import { LongBox } from "../../components/long-box";
import { Poster } from "../../components/Poster";
import { Background } from "./styles"
import React, {useState} from "react"

const Home = () => {

    const [filter, setFilter] = useState(false);
    console.log("filtro: ", filter)


    return (
        <>
        <Header filtro={setFilter}/>
        <Background filter={filter}>
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