
import {useState} from "react"
import "./readMore.css"

export default function ReadMore(props){

    const [readMore, setReadMore] = useState(false);

    var textSegments = props.text.split("@");
    return (
        <div style={{paddingBottom: "2em"}}>
        {readMore === false ? (
          <>
            <p>{textSegments[0]}</p>
            <a className="btn-readMore" onClick={() => setReadMore(true)}>Czytaj więcej</a>
          </>
        ) : (
          <>
            {textSegments.map((segm, i) => (
              <p key={i}>{segm}</p>
            ))}
            <a className="btn-readMore" onClick={() => setReadMore(false)}>Zwiń</a>
          </>
        )}
      </div>
        
    )
}
///{textSegments.map((segm, i) => <p key={i}>{segm}</p>)}