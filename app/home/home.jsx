import Content from "../components/content/content"
import Carousel from "./carousel"
import "./home.css"
import Image from "next/image"
import { BsBookmarkCheck } from "react-icons/bs"
import Link from "next/link"


const description = [
    {text: "Strona w fazie rozwoju."},
    {text: "Strona cały czas się rozwija ale chcemy dla państwa przedstawić w miare możliwości oferę na następny rok szkolny."},
    {text: "Przed pierwszym września stronna powinna być gotowa."}
]


export default function Home(){
    return(
        
        <Content title={"Kilka słów o Młodym Albercie!"}>
            <div className="row">
                <div className="col-lg-5">
                    <p>Młody Albert to firma, która już od 6 lat działa w naszym pięknym mieście. Przygoda z korepetycjami zaczęła się w 2018 roku od jednej sali „w podziemiach”. Teraz prowadzimy zajęcia już nie w jednej, ale dwóch lokalizacjach na terenie Tczewa. Na ulicy Kubusia Puchatka 5 prowadzimy zajęcia w czterech salach przystosowanych do zajęć indywidualnych, a na Alei Zwycięstwa 13 prowadzimy zajęcia grupowe przygotowujące do egzaminów.</p>
                    <p>Nasz zespół to grupa młodych, zdolnych, pełnych pasji osób, które chcą podzielić się wiedzą ze swoimi uczniami. Każdego roku w wakacje sumiennie przygotowujemy się na nowy rok szkolny, aby w pełni sił zacząć nauczanie na początku września i z pełnym zaangażowaniem pomóc dzieciom i młodzieży z poradzeniem sobie z przeciwnościami stawianymi w szkole na kolejnych etapach nauki.</p>
                </div>
                <div className="col-lg-7">
                    <div className="ma-img">
                        <Carousel/>
                    </div>
                </div>
            </div>
            <br />
            <h2 className="title">Nasze oferty</h2>
            <div className="row">
                <div className="col-lg-4 mb-3">
                    <div className="ma-offer disabled image-container">
                        <Link href={"#"}>
                            <Image src="/images/home/zaj-indywidualne.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="ma-offer image-container">
                        <Link href={"/zapisy/kursy"}>
                            <Image src="/images/home/kursy.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="ma-offer disabled image-container">
                        <Link href={""}>
                            <Image src="/images/home/egz-probne.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
            </div>
            <h2 className="title">Rabaty</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="ma-offer image-container">
                        <Link href={"/rabaty/"}>
                            <Image src="/images/home/rabaty.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="ma-offer image-container">
                        <Link href={"/rabaty#rabat-trzymaj"}>
                            <Image src="/images/home/rabat-trzymaj.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="ma-offer image-container">
                        <Link href={"/rabaty#rabat-polecenie"}>
                            <Image src="/images/home/rabat-polecenie.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3">
                    <div className="ma-offer image-container">
                        <Link href={"/rabaty#rabat-potega"}>
                            <Image src="/images/home/rabat-potega.png" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <h2 className="title">Dlaczego my?</h2>
            <div className="row">
                <div className="col-lg-4 mb-3">
                    <div className="whyus-card">
                        <BsBookmarkCheck style={{fontSize: "42px", marginBottom: "12px"}}/>
                        <h4>Bo tak</h4>
                        <p>Nie ma taki ch przystojniakow innych na rynku jak my wiec to by jestesmy najlepsi</p>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="whyus-card">
                        <BsBookmarkCheck style={{fontSize: "42px", marginBottom: "12px"}}/>
                        <h4>Bo tak</h4>
                        <p>Nie ma taki ch przystojniakow innych na rynku jak my wiec to by jestesmy najlepsi</p>
                    </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <div className="whyus-card">
                        <BsBookmarkCheck style={{fontSize: "42px", marginBottom: "12px"}}/>
                        <h4>Bo tak</h4>
                        <p>Nie ma taki ch przystojniakow innych na rynku jak my wiec to by jestesmy najlepsi</p>
                    </div>
                </div>
            </div> */}
            





        </Content>
    )
}