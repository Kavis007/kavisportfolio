import React from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap';
import './Aboutme.css'
import linkedinlogo from './Portfolio/linkedinlogo.png';
import githhublogo from './Portfolio/githublogo.png';
const Aboutpage = () => {
  return (
    <Container fluid style={{height:'85vh'}}>
      <Row style={{ height: '20vh', justifyContent: 'center', marginRight: '20px' }}>
        <Col lg={5}>

        </Col>
        <Col lg={6}>
          <h3>About me</h3> </Col>
      </Row>
      <Row style={{ height: '80vh' }}>
        <Col lg={1}>

        </Col>
        <Col lg={6}>
          <Card className='Cardmain'>
            <Card className='Cardinabout'>
              Hello! I'm is Kaviswaran, and I hold a B.E. in Electronics and Communication Engineering. With a strong academic background of cgpa CGPA of 8.2.iam a passionate developer interesting in web developing</Card>
              <Card className='Cardinabout1'>
                <CardTitle style={{color:'red',fontFamily:'initial',fontWeight:'700'}}>SSLC</CardTitle>
                <CardBody >
                  Iam completed my SSLC in Bharani park matric hr sec school
                  <br></br>
                  <b>Academic year:</b>2017-2018<br/>
                  <b>percentage:</b> 82.2%
                </CardBody>
              </Card>
              <Card className='Cardinabout2'>
                <CardTitle style={{color:'red',fontFamily:'initial',fontWeight:'700'}}>HSC</CardTitle>
                <CardBody >
                  Iam completed my HSC in Vivekananda hr sec school
                  <br></br>
                  <b >Academic year:</b>2019-2020
                  <br/>
                  <b>percentage:</b>73.5%
                </CardBody>
              </Card>
              
              <p >
              I am passionate about technology and development.

I have a deep interest in web development projects and am continuously enhancing my skills in this area. I am eager to apply my knowledge and creativity to real-world projects, solving problems and creating meaningful digital experiences.
              </p>
              
              
               
            
          </Card>
        </Col>
        <Col lg={3}>
          <div >
            <Card className='info1' >
              <Card.Title style={{color:'red'}}>Contact info</Card.Title>
              <Row>
              <Col style={{ borderStyle: 'none', borderRight: '1px solid black' }}>

                  <Row>
                    <a href="https://www.linkedin.com/in/kavis-waran-s-a1b278214/" target="_blank">
                      <img src={linkedinlogo} alt="LinkedIn Logo"></img>
                    </a>

                  </Row>
                  <Row>
                    <a href='https://github.com/dashboard'><img src={githhublogo} alt='github'></img></a>
                  </Row>
                  
                </Col>
                <Col>
                  <p className='info2' >Contact:9345598115</p>
                  <p className='info2'>gmail:kaviskavi15@gmail.com</p>
                </Col>
              </Row>
            </Card>
            <Row>
              <h1 className='aboutdata'style={{color:'brown',fontSize:'170px',fontWeight:'800'}}>ABOUT</h1>
            </Row>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Aboutpage
