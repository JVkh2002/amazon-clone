import { Header } from "../../components/Header";
import banner from "../../assets/menu-banner.jpg";
import { SmallBox } from "../../components/small-box";
import { Background } from "./styles"

const Home = () => {
    return (
        <>
        <Header />
        <Background>
            <SmallBox type = {1} />
            <SmallBox type = {2}/>
            <SmallBox type = {1} />
            <SmallBox type = {1} />
            

        </Background>
        </>
    )
}

export { Home }