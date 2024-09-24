import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import htmlicon from './Portfolio/html icon.png';
import cssicon from './Portfolio/css icon.png'
import jsicon from './Portfolio/js icon.png'
import reacticon from './Portfolio/react icon.png'
import bootstrapicon from './Portfolio/bootstrap icon.png';
import giticon from './Portfolio/github icon.png';
import mongodb from './Portfolio/mongodb.png';
import nodejs from './Portfolio/Node js.png';
import sqlicon from './Portfolio/sqliconnnnnn.png';
import aws from './Portfolio/aws.png';
import skillimg from './Portfolio/skills1.png';
import './skillsstyle.css';
const Skills = () => {
  return (
    <Container fluid style={{ height: '85vh' }}>
      <Row>
        <Col xs={12} md={8} xl={8} lg={8} >
        <div className='textinskilldiv' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h3 className='textinskill'>What skill i know</h3>
        </div>
       
          <Row style={{paddingTop:'100px',paddingLeft:'50px'}}>
            <Col lg={2} xl={2} xs={2} >

              <div  style={{ backgroundColor: 'white' ,marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={htmlicon} alt="HTML5" />
              </div>
             
              <label className="labelfortext">HTML5</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white' ,marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={cssicon} alt="HTML5" />
              </div>
              
              <label className="labelfortext">CSS</label>
            </Col>
            <Col  lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white' ,marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={jsicon} alt="HTML5" />
              </div>
             
              <label className="labelfortext">JavaScript</label>
            </Col>
            <Col lg={2} xl={2} xs={2} >
              <div style={{ backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px' }} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={reacticon} alt="HTML5" />
              </div>
              
              <label className="labelfortext">reactjs</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px' }} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={bootstrapicon} alt="HTML5" />
              </div>
             
              <label className="labelfortext">React bootstrap</label>
            </Col>
          </Row>
          <Row style={{paddingTop:'100px',paddingLeft:'50px'}}>
            <Col lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={mongodb} alt="HTML5" />
              </div>
              
              <label className="labelfortext">MongoDB</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={nodejs} alt="HTML5" />
              </div>
              
              <label className="labelfortext">nodejs</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
              <div style={{ backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
                <img style={{ width: '50px', height: '50px' }} src={sqlicon} alt="HTML5" />
              </div>
              
              <label className="labelfortext">mysql</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
            <div style={{backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
          <img style={{ width: '50px', height: '50px' }} src={giticon} alt="HTML5"/>
        </div>
   
        <label className="labelfortext">githhublogo</label>
            </Col>
            <Col lg={2} xl={2} xs={2}>
            <div style={{backgroundColor: 'white',marginRight:'40px',paddingLeft:'20px'}} className='boxincontent'>
          <img style={{ width: '50px', height: '50px' }} src={aws} alt="HTML5"/>
        </div>
       
        <label className="labelfortext">AWS</label>
            </Col>
          </Row>

        </Col>
        <Col xs={12} md={4} xl={4} lg={4}>

          <img  className='imageanimi'src={skillimg} style={{ height: '300px', width: '500px' }}></img>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
