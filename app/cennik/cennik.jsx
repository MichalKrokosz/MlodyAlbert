import Content from "../components/content/content"
import Image from "next/image"

const description = [
    {text: "Podane ceny dotyczą uczestnictwa w zajęciach jednego dziecka z jednego przedmiotu. Podane ceny w trakcie roku szkolnego mogą ulec zmianie."},
]
const imageStyle = {
    width: "75%",
    height: "auto",
    border: "3px solid white",
    borderRadius: "32px",
    boxShadow: "0 0 8px white"
}


export default function Cennik(){
    return(
        <Content title="Cennik" desc={description}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Image src={"/images/cennik.jpg"} width="1654" height="2339" style={imageStyle} alt="Cennik" />
            </div>
        </Content>
    )
}