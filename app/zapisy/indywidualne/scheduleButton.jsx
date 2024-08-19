
function ClickReservation(){

}


export default function ScheduleButton({lesson}) {
    console.log(lesson);
    console.log(lesson.mode);
    switch (lesson.mode) {
    case "1":
        return(<div className='time-button stationary' onClick={() => ClickReservation() }><strong>{lesson.writeTime}</strong><br/>Zajęcia stacjonarne</div>)
        break;
    case "2":
        return(<div className='time-button stationary'><strong>{lesson.writeTime}</strong><br/>Zajęcia online</div>)
        break;
    default:
        return(<div className='time-button unavailable'>&nbsp;</div>)
    }

}
