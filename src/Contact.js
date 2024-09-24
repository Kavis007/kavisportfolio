import React, { useState } from 'react'
import { Card, Col, Container, FormControl, Row } from 'react-bootstrap'
import './contact.css';
import linkedinlogo from './Portfolio/linkedinlogo.png';
import email from './Portfolio/Gmail_Logo_512px.png'
import phonelogo from './Portfolio/telephone.png';
import contactpic from './Portfolio/contact last.png'
import Customform from './Customform';
const Contact = () => {
    const [input, setInput] = useState();
    const handleemail = () => {
        window.location.href = "mailto:kaviskavi15@gmail.com";
    }
    const handlephone = () => {
        window.location.href = "tel:+919345598115";
    }
   
    return (
        <Container fluid style={{ height: '85vh' }}>
            <Row>
                <Col lg={2} xl={2} xs={2} >

                </Col>
                <Col lg={6} xl={6} xs={12} >
                    <div className='contactdiv'>
                        <h3 className='contactmeword'>Contact me</h3>
                    </div>
                    <Card  className='contactcontent'style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <Row style={{ padding: '200px' }}>
                            <Col lg={4} xl={4} xs={4}>
                                <a href="https://www.linkedin.com/in/kavis-waran-s-a1b278214/" style={{ textDecoration: 'none' }}>
                                    <img src={linkedinlogo} alt="LinkedIn Logo" style={{ width: "50px", height: "50px" }} />
                                </a>
                            </Col>
                            <Col lg={4} xl={4} xs={4}>
                                <a onClick={handleemail} style={{ textDecoration: 'none' }}>
                                    <img src={email} alt='emaillogo' style={{ width: '40px', height: '30px', marginTop: '10px' }} />
                                </a>
                            </Col>
                            <Col lg={4} xl={4} xs={4}>
                                <a onClick={handlephone} style={{ textDecoration: 'none' }}>
                                    <img src={phonelogo} alt='phonelogo' style={{ width: '40px', height: '40px', marginTop: '5px' }} />
                                </a>
                            </Col>
                        </Row>



                    </Card>

                </Col>
                <Col lg={4} xl={4} xs={12} style={{paddingTop:'50px'}}>
                   <Customform/>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact
