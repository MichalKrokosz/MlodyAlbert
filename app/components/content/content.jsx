import "./content.css";

export default function Content(props){
    return(
        <main className="container content shadow-blue">
            <div className="text-shadow" style={{padding: "16px 0"}}>
                {props.title && <h1 className="title">{props.title}</h1>}
                {props.desc && props.desc.length > 0 && props.desc.map((text, index) => <p className="p-2" key={index}>{text.text}</p>)}
            </div>
            {props.children}
            
        </main>

    )
}