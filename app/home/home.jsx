import Content from "../components/content/content"

const description = [
    {text: "Strona w fazie rozwoju."},
    {text: "Strona cały czas się rozwija ale chcemy dla państwa przedstawić w miare możliwości oferę na następny rok szkolny."},
    {text: "Przed pierwszym września stronna powinna być gotowa."}
]


export default function Home(){
    return(
        <Content title={"Strona głównaaaaaaaa"} desc={description}>

        </Content>
    )
}