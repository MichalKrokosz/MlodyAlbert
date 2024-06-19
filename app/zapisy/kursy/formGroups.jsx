'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect} from 'react';
import "../../components/moreCss/form.css"
import Dropdown from '../../components/dropdown/dropdown'
import {BsCircleFill, BsPersonFill, BsPersonArmsUp} from 'react-icons/bs'



export default function FormGroups({clickedGroup}){
    
    var a = "cos";

    let actualYear = new Date().getFullYear();
    const recommendationOptions = [
        {val:"nic", write: "Przez co dowiedziałes sie o Młodym Albercie?"},
        {val:"Jestem stałym klientem", write: "Jestem stałym klientem"},
        {val:"Przez znajomego", write: "Przez znajomego"},
        {val:"Facebook", write: "Facebook"}
    ]
    
    useEffect(() => {
        typeof document !== undefined
          ? require("bootstrap/dist/js/bootstrap")
          : null;
        },[]);

    

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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
            statute: false,
        },
        validationSchema: Yup.object({
            parentFirstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Wymagane'),
            parentLastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Wymagane'),
            tel: Yup.string()
                .matches(phoneRegExp, 'Niepoprawny numer telefonu')
                .required('Wymagane'),
            childFirstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Wymagane'),
            childLastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
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
                .min(Number(actualYear)-30, 'Rok musi być prawidłowy')
                .max(Number(actualYear)-5, 'Rok musi być prawidłowy')
                .required('Wymagane'),
            recommendation: Yup.string()
                .notOneOf(["nic"], "Wolimy aby było wypełnione dla naszych statystyk"),
            email: Yup.string()
                .required('Wymagane'),
            statute: Yup.bool()
                .oneOf([true],"Regulamin musi być zaakceptowany"),
        }),
        onSubmit: values => {
            values.group = clickedGroup;
            //console.log(JSON.stringify(values, null, 2));
            fetch('https://host166766.xce.pl/email/group.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                a = "siema"
            })
            .catch((error) => {
                console.error('Error:', error);
                a = "nara"
            });
                },
    });

    return (
        <>
        <div className="modal fade modal-dialog-scrollable" id="modal-form" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-fullscreen-sm-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Zapis do: {clickedGroup}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-body">

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
                                        <h2 class="text-center">Dane opiekuna</h2>
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
                                        {formik.touched.recommendation && formik.errors.recommendation ? ( <div className='inputError'>{formik.errors.recommendation}</div> ) : <br/>}

                                        {/* regulamin */}
                                        <input className="form-check-input" type="checkbox" id="statute" name='statute' autocomplete="nope" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.statute}></input>
                                        <label className="form-check-label" htmlFor="check" id="check-label">
                                        &nbsp;Zapoznałem się z&nbsp;<a href="regulamin.pdf" target="_blank" style={{color : "white"}}>regulaminem</a>
                                        </label>
                                        {formik.touched.statute && formik.errors.statute ? ( <div className='inputError'>{formik.errors.statute}</div> ) : <br/>}

                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" data-bs-target="#modal-confirmation" data-bs-toggle="modal" data-bs-dismiss="modal" disabled={!(formik.isValid && formik.dirty)}>Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal-confirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{a}</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}



