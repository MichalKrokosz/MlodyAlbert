import "./content.css";

export default function Content(props){
    return(
        <main className="container content shadow-blue">
            <div className="text-shadow" style={{padding: "16px"}}>
                {props.title && <h2 className="title">{props.title}</h2>}
                {props.desc && props.desc.length > 0 && props.desc.map((text, index) => <p key={index}>{text.text}</p>)}
            </div>
            {props.children}
            
        </main>

    )
}