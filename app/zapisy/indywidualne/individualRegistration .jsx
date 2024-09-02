"use client"
import { useState, useEffect, useMemo } from 'react'
import Content from "../../components/content/content"
import Dropdown from "../../components/dropdown/dropdown"
import CardIndividual from "./individualCard"
import FormIndividual from "./individualForm"
import "./card.css"

const description = [
    { text: "Z ogromną przyjemnością przedstawiamy Państwu zespół korepetytorów, którzy w roku szkolnym 2024/2025 prowadzą zajęcia indywidualne z języka polskiego, matematyki, języka angielskiego i chemii." },
    { text: "Aby zapisać się na zajęcia, wystarczy poniżej wybrać poziom i przedmiot, żeby znaleźć odpowiedniego korepetytora, a następnie uzupełnić formularz zgłoszeniowy." },
    { text: "Zapisy na zajęcia indywidualne rozpoczną się w poniedziałek 2 września. Zajęcia, według planu rezerwacji, rozpoczynamy w poniedziałek 9 września. Do zobaczenia! " }
];

const subjectOptions = [
    { val: "all", write: "wszystkie przedmioty" },
    { val: "polski", write: "Język polski" },
    { val: "angielski", write: "Język angielski" },
    { val: "matematyka", write: "Matematyka" },
    { val: "chemia", write: "Chemia" }
];

const levelOptions = [
    { val: "all", write: "wszystkie poziomy" },
    { val: "grade", write: "szkoła podstawowa" },
    { val: "basic", write: "ponadpodstawowa p. podstawowy" },
    { val: "advanced", write: "ponadpodstawowa p. rozszerzony" }
];


export default function ZapisyTutor() {
    const [clickedTutorName, setClickedTutorName] = useState("");
    const [clickedTutorID, setClickedTutorID] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [resetSchedule, setResetSchedule] = useState(false);

    const [sortSubject, setSortSubject] = useState("all");
    const [sortLevel, setSortLevel] = useState("all");

    useEffect(() => {
        fetch('https://mlodyalbert.pl/api/individual/tutors.php')
            .then((res) => res.json())
            .then((data) => {
                setData(data.filter(tutor => tutor.visibility === "1"));
                setLoading(false);
            });
    }, []);

    const filteredData = useMemo(() => {
        return data
            .filter(tutor => sortSubject === "all" || tutor.subject === sortSubject || tutor.subject === "all")
            .filter(tutor => sortLevel === "all" || (sortLevel === "grade" && tutor.grade === "1") || (sortLevel === "basic" && tutor.basic === "1") || (sortLevel === "advanced" && tutor.advanced === "1"))
    }, [data, sortSubject, sortLevel]);

    if (isLoading) return <p>Loading...</p>;
    if (!data.length) return <p>No profile data</p>;

    return (
        <>
            <Content title="Zajęcia indywidualne" desc={description}>
                <h2 className="text-center">Wybierz korepetytora do swoich potrzeb</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Dropdown options={subjectOptions} name="subject" setState={setSortSubject} />
                    </div>
                    <div className="col-md-6">
                        <Dropdown options={levelOptions} name="level" setState={setSortLevel} />
                    </div>
                </div>
                <div className="row">
                    {filteredData.map((tutor, index) => (
                        <CardIndividual key={index} tutor={tutor} setClickedTutorName={setClickedTutorName} setClickedTutorID={setClickedTutorID} setResetSchedule={setResetSchedule} resetSchedule={resetSchedule}/>
                    ))}
                </div>
            </Content>
            <FormIndividual clickedTutorName={clickedTutorName} clickedTutorID={clickedTutorID} resetSchedule={resetSchedule} setResetSchedule={setResetSchedule}/>
        </>
    );
}
