
import { useState, useEffect } from 'react'

    

export default function ScheduleButton({lesson, toggleHour, selectedHours}) {

    const [isActive, setIsActive] = useState(false);

    // Function to toggle the class
    const selectHour = () => {
        if(selectedHours.length < 3 || isActive){
            setIsActive(!isActive);
            toggleHour(lesson.id);
        }
    };


    // console.log(lesson);
    // console.log(lesson.mode);
    (lesson.writeTime === "00:00"? lesson.mode="0":null)
    if(lesson.studentID !== "0"){
        return(<div className='time-button reserved'><strong>{lesson.writeTime}</strong><br/>Zajęte</div>)
    }

    switch (lesson.mode) {
    case "1":
        return(<div className={isActive ? 'time-button stationary chosen' : 'time-button stationary'} onClick={() => { selectHour(); }} ><strong>{lesson.writeTime}</strong><br/>Stacjonarne</div>)
        break;
    case "2":
        return(<div className={isActive ? 'time-button stationary chosen' : 'time-button stationary'} onClick={() => { selectHour(); }} ><strong>{lesson.writeTime}</strong><br/>Online</div>)
        break;
    default:
        return(<div className='time-button unavailable'>&nbsp;</div>)
    }

}
