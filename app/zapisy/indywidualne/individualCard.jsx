import Image from "next/image";
import ReadMore from "../../components/readMore/readMore"
import "./card.css"


export default function CardKursy({tutor, setClickedTutorName, setClickedTutorID, resetSchedule, setResetSchedule}){
    
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
  

    
    return(
        <>
        <div className='col-lg-6 tutorcard'>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <a target='_blank' href={`/images/individual/full/tutor${tutor.id}.jpg`}><Image src={`/images/individual/min/tutor${tutor.id}.jpg`} width="600" height="800" className='rezerw-img'/></a>
                    </div>
                    <div className='col-md'>
                        <p className='card-name'>{tutor.name} <span className={`badge badge-${tutor.subject}`}>{writeSubject}</span></p>
                        <p style={{paddingBottom: "16px"}}>{tutor.description}</p>
                    </div>
                </div>

                {
                    (tutor.access === "1" ?
                        <button type='button' className="btn btn-primary rezerw-button" data-bs-toggle='modal' data-bs-target='#modal-schedule' onClick={() => {setClickedTutorName(tutor.name); setClickedTutorID(tutor.id); setResetSchedule(!resetSchedule)}} >Zarezerwuj teraz!</button>:
                        <button className="btn btn-primary rezerw-button disable" disabled>Zapisy niedostępne</button>
                    )
                }
            </div>
        </div>
        </>
    )
}