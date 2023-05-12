import React, {useState} from "react";

import { Container, Row, Col } from 'react-bootstrap';

import FormComponent from "./FormComponent";
import UserComponent from "./userComponent"

const Data = ({}) => {
    
    const [showData, setShowData] = useState(false)
    const [dataForm, setDataform] = useState({
        name : '',
        mail : '',
        country : '',
        city : '',
    })
    
    return (
        <>
            <Container id="form" className="mb-8">
                <Row>
                    <Col>
                        <h2 className="text-center mb-8 fade-TtoB">Formulario. </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className="mb-4">
                        <FormComponent  dataForm={dataForm} setDataform={setDataform} setShowData={setShowData}/>
                    </Col>
                    <Col sm={6} className="mb-4">
                        { showData ? ( <UserComponent  dataForm={dataForm} />) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Data;