import React from 'react'
import { Row , Col , Placeholder , Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import ImageExpo from './ImageExpo'
import ImgCalendar from '../assets/mi/calendar.svg'
import ImgHotel from '../assets/mi/hotel.svg'
import ImgMeal from '../assets/mi/meal.svg'
import ImgTime from '../assets/mi/time.svg'
import ImgPlane from '../assets/mi/plane.svg'

function DetailTour() {
  return (
    <>
    {/* <Container style={{height : "50px"}}></Container> */}
    <Container className='mt-5 pt-5 ms-5 ps-5'>
      {/* Whitespaces */}
    </Container>
    <ImageExpo>

    </ImageExpo>
    <Container className='mt-5 mb-5'>
    
        <h3 className=' fw-bold mb-4'>Information Trip</h3>
        <Row>
          <Col>
            <h5 className='text-muted'>Accomodation</h5> 
            <p> <img src={ImgHotel} alt="" /> Test Data</p>        
         
          </Col>
          <Col>
          <h5 className='text-muted'>Transportation</h5> 
          <p> <img src={ImgPlane} alt="" /> Test Data</p>        

          </Col>
          <Col>
          <h5 className='text-muted'>Eat</h5> 
          <p> <img src={ImgMeal} alt="" /> Test Data</p>        
   
          </Col>
          <Col>
          <h5 className='text-muted'>Duration</h5> 
          <p> <img src={ImgTime} alt="" /> Test Data</p>         
          </Col>
          <Col>
          <h5 className='text-muted'>Date Trip</h5> 
          <p> <img src={ImgCalendar} alt="" /> Test Data</p>        
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>Description</h3>
          <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi omnis, 
          laudantium nulla voluptas doloremque molestias quod pariatur laboriosam. 
          Nam, dignissimos ratione reiciendis mollitia sed eveniet pariatur eum laborum deleniti quos.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, atque. 
          Ratione perspiciatis numquam ut suscipit illum minima corrupti eveniet sed facilis nihil obcaecati laborum neque, 
          labore corporis consequuntur,
           praesentium vitae!</p>
          </Col>
        </Row>
        <Row className='border-bottom mb-3'>
          <Col>
          <h3><span className='text-warning'>Price </span> / Person</h3>
          </Col>
          <Col xl>&nbsp;</Col>
          <Col xl>&nbsp;</Col>
          <Col xl>&nbsp;</Col>
          <Col xl>&nbsp;</Col>

          <Col sm>
              <div className="input-group">
                <span className="input-group-prepend">
                    <button type="button" className="btn btn-warning btn-number" >
                        <span className="fa fs-5 fw-bold fa-minus"> - </span>
                    </button>
                </span>
                <input type="text"  style={{backgroundColor : 'white' , border : 'none'}} name="quant[1]" className="text-center h2 form-control input-number" value="1" min="1" max="10"></input>
                <span className="input-group-append">
                    <button type="button" class="btn btn-warning btn-number">
                        <span className="fa fs-5 fa-plus fw-bold"> + </span>
                    </button>
                </span>
            </div>
          </Col>
        </Row>
        <Row className='border-bottom mb-3'>
          <Col>
          <h3>Total</h3>
          </Col>
          <Col xl>&nbsp;</Col>
          <Col xs>
          <h3 className='text-warning'>20,000,000</h3>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col md={{ span: 1, offset: 1 }}>
          <Button variant="warning" className="fs-5 text-uppercase text-white me-3 fw-bold pt-2 pb-2 ps-5 pe-5">Order</Button>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default DetailTour