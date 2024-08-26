import Image from "next/image";
import ReadMore from "../../components/readMore/readMore"
import "./card.css"


export default function CardKursy({tutor, setClickedTutorName, setClickedTutorID}){
    
    var writeSubject = "";
    switch (tutor.subject) {
        case 'polski':
            writeSubject = "Język polski";
            break;
        case 'angielski':
            writeSubject = "Język angielski";
            break;
        default:
            writeSubject = tutor.subject.charAt(0).toUpperCase() + tutor.subject.slice(1);
    }

    var writeLevel = "";
    switch (tutor.level) {
        case '8':
            writeLevel = "egz. 8klasisty";
            break;
        case 'm':
            writeLevel = "egz. maturalny";
            break;
        default:
            writeLevel = tutor.subject.charAt(0).toUpperCase() + tutor.subject.slice(1);
    }

    

    
    return(
        <>
        <div className='col-lg-6 tutorcard'>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <a target='_blank' href={`/images/individual/tutor${tutor.id}.jpg`}><Image src={`/images/individual/tutor${tutor.id}.jpg`} width="250" height="250" className='rezerw-img'/></a>
                    </div>
                    <div className='col-md'>
                        <p className='card-name'>{tutor.name} <span className={`badge badge-${tutor.subject}`}>{writeSubject}</span></p>
                        <ReadMore text={tutor.description}/>
                    </div>
                </div>

                {
                    (tutor.access === "1" ?
                        <button type='button' className="btn btn-primary rezerw-button" data-bs-toggle='modal' data-bs-target='#modal-schedule' onClick={() => {setClickedTutorName(tutor.name); setClickedTutorID(tutor.id)}} >Zarezerwuj teraz!</button>:
                        <button className="btn btn-primary rezerw-button disable" disabled>Zapisy niedostępne</button>
                    )
                }
            </div>
        </div>
        </>
    )
}