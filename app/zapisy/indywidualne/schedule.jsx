import { useState, useEffect } from 'react'
import ScheduleButton from "./scheduleButton"


export default function Schedule({ clickedTutorID }) {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://mlodyalbert.pl/api/lessons.php?id=' + clickedTutorID)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [clickedTutorID])

  if (isLoading) return <p>Loading...</p>
  if (!data || data.length === 0) return <p>No profile data</p>

  return (
    <>
      {data.map(lesson => (
        <div className='grid-item' id={lesson.id} key={lesson.id}>
            <ScheduleButton lesson={lesson}/>
        </div>
      ))}
    </>
  )
}
