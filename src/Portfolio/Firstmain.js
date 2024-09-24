import React from 'react';
import { Col, Row, Container, Card } from 'react-bootstrap';
import myPhoto from './myphoto.png';
import './folio.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Typewriter from "typewriter-effect";
const Firstmain = () => {
    return (
        <div className='bgimage' fluid>
            <Container fluid style={{ height: "70vh" }}>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} md={6} className='contentinphoto text-center text-md-left mb-4 mb-md-0'>
                        <Card className="custom-card shadow-lg">
                            <Card.Body>
                                <p className='textdesign'>
                                    I am Kaviswaran,<br />
                                    a  <span style={{ color: "red", fontSize: "25px", fontFamily: "Times New Roman" }}>
                                        <Typewriter
                                            options={{
                                                strings: ["MERN STACK DEVELOPER"],
                                                autoStart: true,
                                                loop: true,  
                                                delay: 120,     
                                            }}
                                        />
                                    </span>

                                    <br />
                                    <span style={{ fontSize: '15px', color: 'GrayText', fontFamily: "inherit" }}>
                                        Creative web developer dedicated to developing and optimizing interactive, user-friendly, and feature-rich websites
                                    </span>
                                    <br />
                                    <i class="bi bi-geo-alt-fill" style={{ fontSize: '25px', color: "black" }}></i>
                                    <span style={{ color: "gray", fontSize: '20px' }}>Coimbatore</span>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <div className='mb-5 fade-in'>
                            <img src={myPhoto} alt="My Photo" className="imagepro" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Firstmain;
