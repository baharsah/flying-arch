import React from 'react'
import { Card , Button } from 'react-bootstrap'
import  Img1 from '../assets/bs/img1.png'
import  Img2 from '../assets/bs/img2.png'
import  Img3 from '../assets/bs/img3.png'
import  Img4 from '../assets/bs/img4.png'
import  Img5 from '../assets/bs/img5.png'
import  Img6 from '../assets/bs/img6.png'

function GroupTour() {
  return (
    <>
    <h1 className={'text-center mt-5 mb-5'}>Group Tour</h1>
    <div className='d-flex ms-5 me-5 flex-wrap justify-content-around'>
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='mb-5' style={{width : '30%' , height : '30%'}}>
    <Card.Img variant="top" src={Img5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>

  )
}

export default GroupTour