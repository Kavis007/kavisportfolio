import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import vijay from './images/vijay.jpg';
import ajith from './images/ajith.jpg';
function Style() {
 let[a,setA]=useState()
 let[b,setB]=useState()
 
      
  return (
    <div>
      <h1>Top actors in south</h1>
      <center>
      <br/>
      
      <img className='two' src={vijay}></img>
      
      <br/>
      <br/>
      <DropdownButton id="dropdown-basic-button" title="Thalapathy vijay">
      <Dropdown.Item href="#/action-1">Actor</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Playback singer</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Dancer</Dropdown.Item>
    </DropdownButton>
    <br/>
    <br/>
    <img className='three' src={ajith}></img>
    <br></br>
    <br/>
    <DropdownButton id="dropdown-basic-buttonss" title="Thalapathy Ajith">
      <Dropdown.Item href="#/action-1">Actor</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Car racer</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Mechanic</Dropdown.Item>
    </DropdownButton>
      </center>
    </div>
  )
}

export default Style
