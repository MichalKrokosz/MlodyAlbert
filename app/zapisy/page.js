import Link from "next/link"
import BulbsButton from "../components/bulbsButton/bulbsButton"
import Content from "../components/content/content"

export default function Zapisy(){
    return(
        <Content>
            <h1 className="cosik">Która oferta cię interesuje?</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="chooseCard disabled">
                        <BulbsButton title={"Zajęcia indywidualne"} text={"Niedostępne"}/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <Link className="chooseCard" href={"/zapisy/kursy"}>
                        <BulbsButton title={"Zajęcia grupowe"}/>
                    </Link>
                </div>
                <div className="col-sm-4">
                    <div className="chooseCard disabled">
                        <BulbsButton title={"Egzaminy próbne"} text={"Niedostępne"}/>
                    </div>
                </div>
            </div>
        </Content>
    )
}