import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <Container id="inicio" className="vh-100 d-flex flex-row justify-content-center align-items-center">
                <Row className="text-center">
                    <Col xs={12} className="mb-4">
                        <h1 className="text-center mb-3  fade-TtoB">React Bootstrap Form. </h1>
                        <p className="text-center w-75 mx-auto mb-4 fade-LtoR">
                            by: Sebastian Vargas Quintana
                        </p>
                        <a className="fade-RtoL" href="https://github.com/searinox0902/react-boostrap-form custom-fade fade-LtoR" target="_blank">
                            https://github.com/searinox0902/react-boostrap-form
                        </a>
                    </Col>
                    
                    <Col xs={12} className="text-center">
                        <Button href="#form" className="btn rounded-pill px-4 py-2 custom-fade fade-BtoT" > EXPLORA </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;