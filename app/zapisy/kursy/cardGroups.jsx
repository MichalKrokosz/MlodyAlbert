import Image from "next/image";
import ReadMore from "../../components/readMore/readMore"


export default function CardKursy({group, setClickedGroup}){
    
    var writeSubject = "Błąd";
    if(group.subject == "polski"){
        writeSubject = "Język polski";
    }
    else if(group.subject == "angielski"){
        writeSubject = "Język angielski";
    }
    else {
        writeSubject = group.subject.toUpperCase();
    }
    
    return(
        <>
        <div className='col-lg-6 tutorcard'>
            <div className='card'>
                <div className='row'>
                    <div className='col-sm-auto'>
                        <a target='_blank' href={`/imagesGroups/${group.name}.jpg`}><Image src={`/imagesGroups/${group.name}.jpg`} width="250" height="250" className='rezerw-img'/></a>
                    </div>
                    <div className='col-sm'>
                        <p className='card-name'>{group.writeName}</p>
                        <p className='badge-container'><span className={`"badge badge-${group.subject}"`}></span> <span className={`"badge badge-${group.mode}"`}>{group.mode}</span> <span className={`"badge badge-${group.level}"`}>{group.level}</span></p>
                        <p><b>{group.time}</b></p>
                        <ReadMore text={group.description}/>
                    </div>
                </div>
                <button type='button' className='btn btn-primary rezerw-button' data-bs-toggle='modal' data-bs-target='#modal-form' onClick={() => setClickedGroup(group.writeName)} >Zarezerwuj teraz!</button>
            </div>
        </div>
        </>
    )
}