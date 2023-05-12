import React, {useState} from "react";

import { Form, Button } from 'react-bootstrap';
import Countrys from "../models/countrys";

const FormComponent = ({dataForm, setDataform, setShowData}) => {
    const [validated, setValidated] = useState(false);
    const [citiesList, setCitiesList] = useState({});

    const setField = (field, value) => {
        console.log(value.replace(/\s/g,''))

        setDataform({
            ...dataForm,
            [field] : value.trim() 
        })


    }
  
    const setCountry = (value) => {
        setDataform({
            ...dataForm,
            country : value
        })
    
        findCities(value);
    }

    const findCities = (value) => {

        const cities = Countrys.find((e) => {
            return e.country === value;
        })
        
        setCitiesList(cities.cities)    
    }
 
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        console.log(form.checkValidity())
        setValidated(true);

        if (form.checkValidity() === false || !dataForm.country && !dataForm.city && !dataForm.name && !dataForm.mail) {
            event.preventDefault();
            event.stopPropagation();
            alert('Ingrese los datos correctamente')
            return
        }

        setShowData(true);
        setValidated(true);
        alert('Se Han enviado los datos')
        event.preventDefault();
    };

    return (
        <>
            <div className="rounded bg-light border border-secondary p-4 ">
                
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="name" name="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            required onChange={(e) => {setField('name', e.target.value)}} 
                            type="text" 
                            pattern="[a-zA-Z][a-zA-Z\s]*" 
                            placeholder="Ej: Sebastian Vargas"  
                            value={dataForm.name}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control 
                            pattern="[^@\s]+@[^@\s]+" 
                            required onChange={(e) => {setField('mail', e.target.value)}} 
                            value={dataForm.mail} 
                            name="mail"
                            type="email"
                            placeholder="Ej : svquintana98@gmail.com"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>Pais</Form.Label>
                        <Form.Select onChange={(e) => {setCountry(e.target.value)}}>
                            
                                { !dataForm.country ? (<option value="">Seleccione</option>) : null}
                                {Countrys.map((e, index) => {
                                return ( <option key={index}>{e.country}</option>)
                                })}

                            
                        </Form.Select>
                    </Form.Group>
                            
                    {
                        dataForm.country && citiesList.length ? 
                        (
                            <Form.Group className="mb-4" controlId="city">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Select  onChange={(e) => {setField('city', e.target.value)}}   aria-label="Default select example">
                                   
                                    { !dataForm.city ? ( <option  value="">Seleccione</option>) : null}
                                    {citiesList.map((e, index) => {
                                        return ( <option key={index} value={e}>{e}</option>)
                                    })}
                                </Form.Select>
                            </Form.Group>
                        )
                        : null
                    }


                    { dataForm.name  && dataForm.country && dataForm.city && dataForm.mail 
                        ? (
                            <Button variant="primary" type="submit" className="rounded-pill px-4 py-2">
                                Enviar datos
                            </Button>
                            )  
                        : null
                    }
                </Form>
            </div>

        </>
    )
}

export default FormComponent;