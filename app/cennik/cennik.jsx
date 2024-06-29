import Content from "../components/content/content"
import Image from "next/image"

const description = [
    {text: "Podane ceny dotyczą uczestnictwa w zajęciach jednego dziecka z jednego przedmiotu. Podane ceny w trakcie roku szkolnego mogą ulec zmianie."},
]
const imageStyle = {
    width: "70%",
    height: "auto",
    border: "3px solid white",
    borderRadius: "32px",
    boxShadow: "0 0 8px white"
}


export default function Cennik(){
    return(
        <Content>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "32px"}}>
                <Image src={"/images/cennik.jpg"} width="1654" height="2339" style={imageStyle} alt="Cennik" />
            </div>
            <div className="whiteCard" style={{width: "70%"}}>
                Powyższy cennik obowiązuje w roku szkolnym 2024/2025.<br/>Podane ceny dotyczą uczestnictwa jednego ucznia z jednego przedmiotu.<br/>Ceny w ciągu roku szkolnego mogą ulec zmianie o wartość wskaźnika inflacji. 
            </div>
        </Content>

    )
}