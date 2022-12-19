import BG from '../assets/bg.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button , Container} from 'react-bootstrap';

import React from 'react'

function SearchableContainer() {
  return (
    <Container fluid style={ {   backgroundRepeat: "no-repeat"  , objectFit : "cover" , backgroundSize : "100%" , backgroundImage : `url(${BG})` }}  >
{/* <div style={{ width : "100%" , height : '100%' , position : 'absolute' , zIndex : 1 ,   objectFit : "cover" , backgroundSize : "100%" , backgroundImage : `url(${BGBackdrop})` }}>&nbsp;</div> */}
  <div style={{padding : "90px" }}>
  <h1 className='fw-bold fs-extra' style={ {color : "white" } }>Explore</h1>
  <h1 className='fw-light' style={ { color : "white" } }>Your amazing trip today</h1>
  <div style={{padding : "30px"}}>

  <Form.Label className="fs-4" style={{color : "white"}}  htmlFor="basic-url">Search your pace</Form.Label>
  <InputGroup className="mb-3">
    <Form.Control className='fs-3 fw-bold' id="basic-url" aria-describedby="basic-addon3" />
    <Button variant="warning" className='fw-bold fs-3' style={{ color : "white" , padding : "20px"}} id="button-addon2">
      Search
    </Button>
  </InputGroup>

</div>
  </div>
</Container>
  )
}

export default SearchableContainer



