import Content from "../components/content/content";
import { BsPhone, BsEnvelope, BsPerson, BsPeople } from "react-icons/bs";
import "./contact.css"


function ContactCard({ icon: Icon, textBig, textSmall}){
    textBig = " " + textBig;
    return(
        <div className="contact">
            <h3><Icon /><span>{textBig}</span></h3>
            <p>{textSmall}</p>
        </div>
    )
}


export default function Contact(){
    return (
        <Content title="Kontakt" desc={[{text: "Gdzie prowadzimy nasze zajęcia?"}]}>
            <div className="row">
                <div className="col-lg-4" style={{paddingLeft: "22px", paddingTop: "8px"}}>
                    <ContactCard icon={BsPhone} textBig={"Telefon"} textSmall={"+48 609 979 345"}/>
                    <ContactCard icon={BsEnvelope} textBig={"e-mail"} textSmall={"mlodyalbert.ma@gmail.com"}/>
                    <ContactCard icon={BsPerson} textBig={"Zajęcia indywidualne"} textSmall={"ul. Kubusia Puchatka 5/16"}/>
                    <ContactCard icon={BsPeople} textBig={"Zajęcia grupowe"} textSmall={"al. Zwycięstwa 12/4"}/>
                </div>
                <div className="col-lg-8">
                    <iframe src="https://maps.google.com/maps?q=54.090725, 18.769935&z=15&output=embed" width="100%" height="350" frameborder="0" style={{boxShadow: "0 0 4px white"}}></iframe>
                    <iframe src="https://maps.google.com/maps?q=54.093402, 18.785241&z=15&output=embed" width="100%" height="350" frameborder="0" style={{boxShadow: "0 0 4px white"}}></iframe>
                </div>
            </div>
        </Content>
    )
}