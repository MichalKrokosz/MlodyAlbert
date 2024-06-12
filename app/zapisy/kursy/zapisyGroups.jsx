"use client"
import { useState, useEffect } from 'react'
import Content from "../../components/content/content"
import Dropdown from "../../components/dropdown/dropdown"
import CardGroups from "./cardGroups"
import FormGroups from "./formGroups"
import "./card.css"

const description = [
    {text: "W tej części mamy ogromną przyjemność przedstawić korepetytorów, którzy w roku szkolnym 2023 / 2024 będą prowadzić zajęcia indywidualne. Należy wybrać przedmiot, z którego uczeń potrzebuje pomocy oraz poziom, na którym obecnie się uczy, a system filtrowania pokaże odpowiednich korepetytorów."},
    {text: "Chociaż plany zajęć korepetytorów są dostępne już pod koniec sierpnia to zapisy zawsze zaczynamy w dniu rozpoczęcia roku szkolnego, tym razem, wyjątkowo, w poniedziałek 4 września."},
    {text: "Pierwsze zajęcia indywidualne rozpoczną się w tym roku w poniedziałek 11 września."}
]
const subject = [
    {val:"wszystkie", write: "wszystkie przedmioty"},
    {val:"polski", write: "Język polski"},
    {val:"angielski", write: "Język angielski"},
    {val:"matematyka", write: "Matematyka"}
]
const level = [
    {val:"wszystkie", write: "wszystkie egzaminy"},
    {val:"8", write: "egzamin ósmoklasisty"},
    {val:"m", write: "egzamin maturalny"}
]


export default function ZapisyGroups(){

    const [clickedGroup, setClickedGroup] = useState("");
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/api/groups')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])
     
      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No profile data</p>
    return(
        <>
        <Content title="Siema title" desc={description}>
            <h2 className="text-center">--- Wybierz grupę do swoich potrzeb ---</h2>
            <div className="row">
                <div className="col-6">
                    <Dropdown options={subject} name="subject"/>
                </div>
                <div className="col-6">
                    <Dropdown options={level} name="level"/>
                </div>
            </div>
            <div className="row">
                {data.map( (group, index) => <CardGroups key={index} group={group} setClickedGroup={setClickedGroup} />)}
            </div>
        </Content>
        <FormGroups clickedGroup={clickedGroup}/>
        
        </>
    )

}
