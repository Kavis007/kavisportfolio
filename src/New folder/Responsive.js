import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
function Responsive() {
    return (
        <>
            {/* <Row>
                <Col className='z1' lg={2} md={6} xs={12}>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

                    As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation
                </Col>
                <Col className='z2' lg={4} md={6} xs={12}>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

                    As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation
                </Col>
                <Col className='z3' lg={2} md={6} xs={12}>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

                    As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation
                </Col>
                <Col className='z4' lg={4} md={6} xs={12}>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

                    As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation
                </Col>
            </Row> */}

            {/* <Row>
                <Col lg={1} xs={0} md={0}></Col>
                <Col lg={8} xs={6} md={8}>
                <br/>
                    <h1>Netflix</h1>
                </Col>
                <Col lg={3} xs={6} md={4}>
                <br/>
                <button>English</button>
                <button>Sign in</button>
                </Col>
            </Row> */}


            {/* <p className='z5'>Hello Coimbatore</p> */}
            {
                <Row>
                    <Col lg={1} xs={0} >

                    </Col>
                    <Col lg={7} xs={3} >
                        <h1 className='bb1'>Netflix</h1>
                    </Col>
                    <Col lg={1} xs={4}>
                        <Dropdown className='b1' style={{marginRight:'10px'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Language
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                           
                            </Dropdown.Menu>
                        </Dropdown>
                        
                    </Col>
                    <Col lg={2} xs={5} >
                    <Button  className='b2' variant="danger">Danger</Button>{' '}
                    </Col>
                </Row>
            }
        </>
    );
}

export default Responsive;