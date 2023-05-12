import React from "react";


import {Container, Row, Col, Button} from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <Container className="vh-100 d-flex flex-row justify-content-center align-items-center">
                <Row className="text-center">
                    <Col xs={12} className="mb-4">
                        <h1 className="text-center mb-3">Lorem ipsum dolor sit amet. </h1>
                        <p className="text-center w-75 mx-auto mb-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore.
                        </p>
                    </Col>
                    
                    <Col xs={12} className="text-center">
                        <Button> Get Started!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;