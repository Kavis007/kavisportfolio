import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, CardText, Form, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
function Wednesday() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function Loginfn() {

    }
    return (
        <div>
            <Row>
                <Col sm={2} md={2} lg={2} xl={2}>

                </Col>
                <Col sm={4} md={4} lg={4} xl={4}>
                    <p className='p1'>facebook</p>
                    <p className='p2'>Facebook helps you connect and share<br></br> with the people in your life.</p>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4}>
                    <Card style={{ width: '30rem', height: '42vh' }} className='c1'>
                        <Card.Body>

                            <input className='i1' type='text' placeholder='Enter email or phone number' />


                            <input type='text' className='i2' placeholder='password' />

                            <br /><br />
                            <Form.Control size="lg" type="text" placeholder="Large text" />



                            <Button className='b11' style={{ backgroundColor: 'blue', fontSize: '20px', fontWeight: '700px' }}>Log in</Button>

                            <a className='l1' href='https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DAndroid'>forgot password</a>
                            <hr />

                            <Button onClick={handleShow} className='b2' style={{ fontSize: '20px', fontWeight: '700px', backgroundColor: 'green' }}>Create an account</Button>{' '}


                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        
                                    </Row>



                                </Modal.Body>
                               
                            </Modal>





















                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={2} md={2} lg={2} xl={2}>

                </Col>

            </Row>
        </div>
    )
}

export default Wednesday;
