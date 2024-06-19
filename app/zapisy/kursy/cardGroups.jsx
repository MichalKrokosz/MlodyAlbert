import Image from "next/image";
import ReadMore from "../../components/readMore/readMore"
import "./card.css"


export default function CardKursy({group, setClickedGroup}){
    
    var writeSubject = "error";
    switch (group.subject) {
        case 'polski':
            writeSubject = "Język polski";
            break;
        case 'angielski':
            writeSubject = "Język angielski";
            break;
        default:
            writeSubject = group.subject.charAt(0).toUpperCase() + group.subject.slice(1);
    }

    var writeLevel = "error";
    switch (group.level) {
        case '8':
            writeLevel = "egz. 8klasisty";
            break;
        case 'm':
            writeLevel = "egz. maturalny";
            break;
        default:
            writeLevel = group.subject.charAt(0).toUpperCase() + group.subject.slice(1);
    }

    

    
    return(
        <>
        <div className='col-lg-6 tutorcard'>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <a target='_blank' href={`/images/imagesGroups/${group.name}.jpg`}><Image src={`/images/imagesGroups/${group.name}.jpg`} width="250" height="250" className='rezerw-img'/></a>
                    </div>
                    <div className='col-md'>
                        <p className='card-name'>{group.writeName}</p>
                        <p className='badge-container'><span className={`badge badge-${group.subject}`}>{writeSubject}</span> <span className={`badge badge-${group.mode}`}>{group.mode}</span> <span className={`badge badge-${group.level}`}>{writeLevel}</span></p>
                        <p><b>{group.time}</b></p>
                        <ReadMore text={group.description}/>
                    </div>
                </div>

                {
                    (group.access === "1" ?
                        <button type='button' className="btn btn-primary rezerw-button" data-bs-toggle='modal' data-bs-target='#modal-form' onClick={() => setClickedGroup(group.writeName)} >Zarezerwuj teraz!</button>:
                        <button className="btn btn-primary rezerw-button disable" disabled>Zapisy niedostępne</button>

                    )


                }

                
            </div>
        </div>
        </>
    )
}