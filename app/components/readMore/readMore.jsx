export default function ReadMore(props){
    var textSegments = props.text.split("@")
    return (
        <div style={{paddingBottom: "2em"}}>
            {textSegments.map((segm, i) => <p key={i}>{segm}</p>)}
        </div>
        
    )
}