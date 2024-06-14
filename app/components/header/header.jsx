import { BsFillTelephoneFill, BsFacebook, BsInstagram } from "react-icons/bs";
import "./header.css";
import Image from "next/image";
import Link from 'next/link';
const iconStyle = { color: "white", fontSize: "16px"}

export default function Header(){
    return(
        <header className="container-fluid my-0">
            <div style={{textAlign: "right", color: "white"}}>
                <BsFillTelephoneFill style={iconStyle}/> <span style={iconStyle}>609 979 345 &nbsp;&nbsp;</span>
                <BsFacebook style={iconStyle} />&nbsp;&nbsp;
                <BsInstagram style={iconStyle} />
            </div>
            <div className="row">
                <div className="col-6 header-text">
                    <p>Centrum<br/>Korepetycji</p>
                </div>
                <div className="col-6" style={{textAlign: "left"}}>
                    <Link href="https://mlodyalbert.pl/">
                        <Image 
                            className="header-img" 
                            width="250"
                            height="250"
                            src={"/images/logo-empty.png"} 
                            alt="Logo"/>
                    </Link>
                </div>
            </div>
            <div style={{margin: "0 10px"}}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Główna</Link>
                        </li>
                        <li>
                            <Link href="/zapisy">Zapisy</Link>
                        </li>
                        <li>
                            <Link href="/zapisy">Cennik</Link>
                        </li>
                        <li>
                            <Link href="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>  
    )
}