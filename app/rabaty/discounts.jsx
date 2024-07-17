import Content from "../components/content/content"
import "./discount.css"
import Image from "next/image"


const description = [
    { text: "mamy tak tak" },
];


export default function Discounts(){
    return(
        <Content title={"Nasze rabaty i promocje"}>

        <div className="discount-card" id="rabat-trzymaj">
            <div className="row">
                <div className="col-md-5 p-0">
                    <Image src="/images/home/rabat-trzymaj.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
                <div className="col-md-7 p-4">
                    <h2 className="fw-bold">Trzymaj poziom - trzymaj cenę</h2>
                    <p>Systematyczność w nauce to podstawa! Dlatego przygotowaliśmy bonus za kontynuację zajęć! Byłeś naszym uczniem? Zapisz się na zajęcia indywidualne do 8 września 2024 i utrzymaj cenę z zeszłego roku szkolnego. Szczegóły w regulaminie!</p>
                    <a target="_blank" href={`/dokumenty/Trzymaj-poziom.pdf`}>Regulamin promocji</a>
                </div>
            </div>
        </div>

        <div className="discount-card" id="rabat-polecenie">
            <div className="row">
                <div className="col-7 p-4">
                    <h2 className="fw-bold">Rabaty za polecenie</h2>
                    <p>Jesteś zadowolony z naszych zajęć! Poleć nas znajomym i zbierz 5% rabaty za każdego znajomego, który zapisze się na nasze zajęcia. Promocja dotyczy zajęć indywidualnych i grupowych! Szczegóły sprawdź w regulaminie! </p>
                    <a target="_blank" href={`/dokumenty/Rabaty-za-polecenie.pdf`}>Regulamin promocji</a>
                </div>
                <div className="col-md-5 p-0">
                    <Image src="/images/home/rabat-polecenie.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
            </div>
        </div>
        
        <div className="discount-card" id="rabat-potega">
            <div className="row">
                <div className="col-md-5 p-0">
                    <Image src="/images/home/rabat-potega.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
                <div className="col-md-7 p-4">
                    <h2 className="fw-bold">Rabat na potęgę</h2>
                    <p>Umiesz potęgować? To patrz! Kurs do potęgi drugiej to 9% rabatu, a kurs do potęgi trzeciej to 27% rabatu. Zapisz się na grupowe kursy przygotowujące do egzaminów i przygotuj się z nami kompleksowo! Szczegóły w regulaminie! </p>
                    <a target="_blank" href={`/dokumenty/Rabat-na-potege.pdf`}>Regulamin promocji</a>
                </div>
            </div>
        </div>

        </Content>

    )
}