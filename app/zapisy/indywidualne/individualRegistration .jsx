"use client"
import { useState, useEffect, useMemo } from 'react'
import Content from "../../components/content/content"
import Dropdown from "../../components/dropdown/dropdown"
import CardIndividual from "./individualCard"
import FormIndividual from "./individualForm"
import "./card.css"

const description = [
    { text: "Mamy ogromną przyjemność przedstawić Państwu ofertę kursów przygotowujących do egzaminu ósmoklasisty i egzaminu maturalnego." },
    { text: "Wszystkie kursy obejmują 30 spotkań po 90 minut. W roku szkolnym 2024/2025 w ofercie znajdą Państwo kursy przygotowujące do egzaminów z języka polskiego, matematyki i języka angielskiego, zarówno w formie stacjonarnej (dla uczniów z Tczewa i okolic) oraz w formie zdalnej." },
    { text: "Wystarczy poniżej wybrać poziom, przedmiot i tryb zajęć, a następnie uzupełnić formularz zgłoszeniowy." }
];

const subjectOptions = [
    { val: "all", write: "wszystkie przedmioty" },
    { val: "polski", write: "Język polski" },
    { val: "angielski", write: "Język angielski" },
    { val: "matematyka", write: "Matematyka" }
];

const levelOptions = [
    { val: "all", write: "wszystkie poziomy" },
    { val: "grade", write: "szkoła podstawowa" },
    { val: "basic", write: "ponadpodstawowa p. podstawowy" },
    { val: "advanced", write: "ponadpodstawowa p. rozszerzony" }
];

const modeOptions = [
    { val: "all", write: "wszystkie tryby zajęć" },
    { val: "stacjonarne", write: "zajęcia stacjonarne" },
    { val: "online", write: "zajęcia online" }
];

export default function ZapisyTutor() {
    const [clickedTutorName, setClickedTutorName] = useState("");
    const [clickedTutorID, setClickedTutorID] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [sortSubject, setSortSubject] = useState("all");
    const [sortLevel, setSortLevel] = useState("all");
    const [sortMode, setSortMode] = useState("all");

    useEffect(() => {
        fetch('https://mlodyalbert.pl/api/tutors.php')
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
    }, [data, sortSubject, sortLevel, sortMode]);

    if (isLoading) return <p>Loading...</p>;
    if (!data.length) return <p>No profile data</p>;

    return (
        <>
            <Content title="Zajęcia grupowe" desc={description}>
                <h2 className="text-center">Wybierz grupę do swoich potrzeb</h2>
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
                        <CardIndividual key={index} tutor={tutor} setClickedTutorName={setClickedTutorName} setClickedTutorID={setClickedTutorID}/>
                    ))}
                </div>
                <div className="whiteCard" style={{ width: "98%" }}>
                    Zastrzegamy sobie prawo do anulowania kursu w przypadku niewystarczającej liczby chętnych uczestników.<br />Prosimy o dokładne zapoznanie się z regulaminem zajęć grupowych. <a target='_blank' href='/dokumenty/Regulamin-zajec-grupowych.pdf'>Dostępny tutaj.</a>
                </div>
            </Content>
            <FormIndividual clickedTutorName={clickedTutorName} clickedTutorID={clickedTutorID}/>
        </>
    );
}
