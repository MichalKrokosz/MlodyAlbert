import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";


export default function Dropdown(props){
    return(
        <select className="form-select form-select-lg" name={props.name} id={props.name}>
            {props.options.map((item, i) => <option key={i} value={item.val}>{item.write}</option>)}
        </select>
    )
}