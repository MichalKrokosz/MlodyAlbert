import Content from "../components/content/content"
import Image from "next/image"

const description = [
    {text: "Cennik"},
]
const imageStyle = {
    width: "70%",
    height: "auto",
    border: "3px solid white",
    borderRadius: "32px"

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