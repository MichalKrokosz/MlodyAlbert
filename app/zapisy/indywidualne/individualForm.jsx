'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState, useReducer} from 'react';
import "../../components/moreCss/form.css"
import Dropdown from '../../components/dropdown/dropdown'
import Schedule from "./schedule"
import {BsCircleFill, BsPersonFill, BsPersonArmsUp, BsCheck2Circle, BsDashCircle, BsArrowUpCircle} from 'react-icons/bs'


function ConfirmationPanel({ icon: Icon, iconColor, textBig, textSmall }) {
    console.log(iconColor)
    return (
        <div className="confirmation-panel">
            <Icon style={{ color: iconColor, fontSize: "42px" }} />
            <h3>{textBig}</h3>
            <p>{textSmall}</p>
        </div>
    );
}



const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {icon: BsCheck2Circle, iconColor: "green", textBig: "Wysłano pomyślnie", textSmall: "Potwierdzenie rezerwacji zostało wysłane na podany adres email. Skontaktujemy się z państwem najszybciej jak to możliwe w celu weryfikacji danych."}
        case "FAILURE":
            return {icon: BsDashCircle, iconColor: "red", textBig: "Wystąpił błąd", textSmall: "W celu wyjaśnienia sytuacji i zarezerwowania prosimy skontaktować się telefonicznie lub emailem albo spróbować ponownie"}
        case "SENDING":
            return {icon: BsArrowUpCircle, iconColor: "rgb(0, 120, 237)", textBig: "Wysyłanie", textSmall: ""}
        default:
            return state;
    }
  };


export default function FormTutor({clickedTutorName, clickedTutorID}){
    
    
    const [sendState, dispatch] = useReducer(reducer, {icon: BsArrowUpCircle, iconColor: "rgb(0, 120, 237)", textBig: "Wysyłanie", textSmall: ""});


    let actualYear = new Date().getFullYear();
    const recommendationOptions = [
        {val:"nic", write: "Przez co dowiedziałes sie o Młodym Albercie?"},
        {val:"Jestem stałym klientem", write: "Jestem stałym klientem"},
        {val:"Przez znajomego", write: "Przez znajomego"},
        {val:"Media społecznościowe", write: "Media społecznościowe"}
    ]
    
    useEffect(() => {
    typeof document !== undefined
        ? require("bootstrap/dist/js/bootstrap")
        : null;
    },[]);

    

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formik = useFormik({
        initialValues: {
            parentFirstName: '',
            parentLastName: '',
            tel: '',
            childFirstName: '',
            childLastName: '',
            birthDay: '',
            birthMonth: '',
            birthYear: '',
            email: '',
            recommendation: '',
            recommendationName: '',
            statute: false,
        },
        validationSchema: Yup.object({
            parentFirstName: Yup.string()
                .max(15, 'Maksymalnie 15 znaków')
                .required('Wymagane'),
            parentLastName: Yup.string()
                .max(25, 'Maksymalnie 25 znaków')
                .required('Wymagane'),
            tel: Yup.string()
                .matches(phoneRegExp, 'Niepoprawny numer telefonu')
                .required('Wymagane'),
            childFirstName: Yup.string()
                .max(15, 'Maksymalnie 15 znaków')
                .required('Wymagane'),
            childLastName: Yup.string()
                .max(25, 'Maksymalnie 25 znaków')
                .required('Wymagane'),
            birthDay: Yup.number()
                .min(1, 'Dzień musi być prawidłowy')
                .max(31, 'Dzień musi być prawidłowy')
                .required('Wymagane'),
            birthMonth: Yup.number()
                .min(1, 'Miesiąc musi być prawidłowy')
                .max(12, 'Miesiąc musi być prawidłowy')
                .required('Wymagane'),
            birthYear: Yup.number()
                .min(Number(actualYear)-40, 'Rok musi być prawidłowy')
                .max(Number(actualYear)-5, 'Rok musi być prawidłowy')
                .required('Wymagane'),
            recommendationName: Yup.string()
                .max(50, 'Maksymalnie 50 znaków'),
            email: Yup.string()
                .matches(emailRegex, 'Niepoprawny adres email')
                .required('Wymagane'),
            statute: Yup.bool()
                .oneOf([true],"Regulamin musi być zaakceptowany"),
        }),
        onSubmit: values => {
            values.group = clickedGroup;
            dispatch({ type: "SENDING" })
            //console.log(JSON.stringify(values, null, 2));
            fetch('https://mlodyalbert.pl/email/group.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch({ type: "SUCCESS" })
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch({ type: "FAILURE" })
            });
                },
    });

    return (
        <>

        <div className="modal fade modal-dialog-scrollable" id="modal-schedule" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="wrapper">
                            <section className="cards">
                                <div className="grid-container">
                                    <div className="grid-top">Pn</div>
                                    <div className="grid-top">Wt</div>
                                    <div className="grid-top">Śr</div>
                                    <div className="grid-top">Cz</div>
                                    <div className="grid-top">Pt</div>
                                    <div className="grid-top">So</div>
                                    <div className="grid-top">N</div>

                                    <Schedule clickedTutorID={clickedTutorID}/>
                                    
                                </div>
                            </section>
                        </div>

                        <p className="text-right">Wybrane godziny są oznaczone czerwoną obramówką. Maksymalnie można wybrać 3 godziny</p>
                        <h5>Legenda</h5>
                        <div className="row">
                            <div className="col-4">
                                <div className="stationary legend time-button">Zajęcia dostępne</div>
                            </div>
                            <div className="col-4">
                                <div className="reserved legend time-button">Zajęcia wstępnie zarezerwowane</div>
                            </div>
                            <div className="col-4">
                                <div className="unavailable legend time-button">Zajęcia zajęte</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="modal fade modal-dialog-scrollable" id="modal-form" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Zapis do: <strong>{clickedTutorName}</strong></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id='signup-form' onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6' style={{marginBottom: "1.6em"}}>
                                    <div className='input-container'>
                                        <div class="icon-container">
                                            <div class="icon-overlay">
                                                <BsCircleFill className='bi'/>
                                                <BsPersonFill className='bi'/>
                                            </div>
                                        </div>
                                        <h2 class="text-center">Dane opiekuna</h2>
                                        {/* parentFirstName */}
                                        <input id="parentFirstName" name="parentFirstName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.parentFirstName} />
                                        <label htmlFor="parentFirstName" placeholder="Imię"></label>
                                        {formik.touched.parentFirstName && formik.errors.parentFirstName ? ( <div className='inputError'>{formik.errors.parentFirstName}</div> ) : <br/>}

                                        {/* parentLastName */}
                                        <input id="parentLastName" name="parentLastName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.parentLastName} />
                                        <label htmlFor="parentLastName" placeholder="Nazwisko"></label>
                                        {formik.touched.parentLastName && formik.errors.parentLastName ? ( <div className='inputError'>{formik.errors.parentLastName}</div> ) : <br/>}
                                        
                                        {/* tel */}
                                        <input id="tel" name="tel" type="tel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tel} />
                                        <label htmlFor="tel" placeholder="Nr telefonu"></label>
                                        {formik.touched.tel && formik.errors.tel ? ( <div className='inputError'>{formik.errors.tel}</div> ) : <br/>}
                                    </div>
                                </div>
                                <div className='col-md-6' style={{marginBottom: "1.6em"}}>
                                    <div className='input-container'>
                                        <div class="icon-container">
                                            <div class="icon-overlay">
                                                <BsCircleFill className='bi'/>
                                                <BsPersonArmsUp className='bi'/>
                                            </div>
                                        </div>
                                        <h2 class="text-center">Dane uczestnika</h2>
                                        {/* childFirstName */}
                                        <input id="childFirstName" name="childFirstName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.childFirstName} />
                                        <label htmlFor="childFirstName" placeholder="Imię"></label>
                                        {formik.touched.childFirstName && formik.errors.childFirstName ? ( <div className='inputError'>{formik.errors.childFirstName}</div> ) : <br/>}

                                        {/* childLastName */}
                                        <input id="childLastName" name="childLastName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.childLastName} />
                                        <label htmlFor="childLastName" placeholder="Nazwisko"></label>
                                        {formik.touched.childLastName && formik.errors.childLastName ? ( <div className='inputError'>{formik.errors.childLastName}</div> ) : <br/>}


                                        <div className="row">
                                            <p>Data urodzenia</p>
                                            <div className="col-4">
                                                {/* bDay */}
                                                <input id="birthDay" name="birthDay" type="number" min={1} max={31} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthDay} />
                                                <label htmlFor="birthDay" placeholder="Dzień"></label>
                                                {formik.touched.birthDay && formik.errors.birthDay ? ( <div className='inputError'>{formik.errors.birthDay}</div> ) : <br/>}
                                            </div>
                                            <div className="col-4">
                                                {/* bMonth */}
                                                <input id="birthMonth" name="birthMonth" type="number" min={1} max={12} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthMonth} />
                                                <label htmlFor="birthMonth" placeholder="Miesiąc"></label>
                                                {formik.touched.birthMonth && formik.errors.birthMonth ? ( <div className='inputError'>{formik.errors.birthMonth}</div> ) : <br/>}
                                            </div>
                                            <div className="col-4">
                                                {/* bYear */}
                                                <input id="birthYear" name="birthYear" type="number" min={Number(actualYear) - 30} max={Number(actualYear) - 5} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.birthYear} />
                                                <label htmlFor="birthYear" placeholder="Rok"></label>
                                                {formik.touched.birthYear && formik.errors.birthYear ? ( <div className='inputError'>{formik.errors.birthYear}</div> ) : <br/>}
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                                <div className='col-12'>
                                    <div className='input-container'>
                                        {/* email */}
                                        <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                        <label htmlFor="email" placeholder="Email"></label>
                                        {formik.touched.email && formik.errors.email ? ( <div className='inputError'>{formik.errors.email}</div> ) : <br/>}

                                        {/* polecajka */}
                                        <select className="form-select form-select-lg" name="recommendation" id="recommendation"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.recommendation} >
                                            {recommendationOptions.map((item, i) => <option key={i} value={item.val}>{item.write}</option>)}
                                        </select>
                                        


                                        {/* polecajka nazwa */}
                                        <div style={(formik.values.recommendation === "Przez znajomego") ? {} : {display: "none"}}>
                                            <input id="recommendationName" name="recommendationName" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.recommendationName} />
                                            <label htmlFor="recommendationName" placeholder="Imię i nazwisko osoby polecającej"></label>
                                            {formik.touched.recommendationName && formik.errors.recommendationName ? ( <div className='inputError'>{formik.errors.recommendationName}</div> ) : <br/>}
                                        </div>

                                        {/* regulamin */}
                                        <input className="form-check-input" type="checkbox" id="statute" name='statute' autocomplete="nope" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.statute}></input>
                                        <label className="form-check-label" htmlFor="check" id="check-label">
                                        &nbsp;Zapoznałem się z&nbsp;<a href="/dokumenty/Regulamin-zajec-grupowych.pdf" target="_blank" style={{color : "white"}}>regulaminem</a>
                                        </label>
                                        {formik.touched.statute && formik.errors.statute ? ( <div className='inputError'>{formik.errors.statute}</div> ) : <br/>}

                                    </div>
                                </div>
                            </div>
                            
                        </form>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" form='signup-form' data-bs-target="#modal-confirmation" data-bs-toggle="modal" data-bs-dismiss="modal" disabled={!(formik.isValid && formik.dirty)}>Zapisz się!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="modal fade" id="modal-confirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <ConfirmationPanel 
                        icon={sendState.icon}
                        iconColor={sendState.iconColor} 
                        textBig={sendState.textBig} 
                        textSmall={sendState.textSmall}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}





/*
<ConfirmationPanel 
    icon={BsCheck2Circle} 
    textBig={"Wysłano pomyślnie"} 
    textSmall={"Potwierdzenie rezerwacji wysłaliśmy na podany email i będziemy się kontaktować na podany numer telefonu w celu potwierdzenia rezerwacji"}
/>

<ConfirmationPanel 
    icon={BsDashCircle} 
    textBig={"Wystąpił błąd"} 
    textSmall={"W celu wyjaśnienia sytuacji i zarezerwowania prosimy skontaktować się telefonicznie lub emailem albo spróbować ponownie"}
/>
*/