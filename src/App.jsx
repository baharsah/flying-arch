import { useState } from 'react'
import CustomNavbar from './components/navbar'
import Container from 'react-bootstrap/Container';
import BG from './assets/bg.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import BGBackdrop from './assets/backdrop.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GaransiImg from './assets/garansi.svg'
import OppaKorea from './assets/oppakorea.svg'



function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>
    <CustomNavbar></CustomNavbar>
    <Container fluid style={ {   backgroundRepeat: "no-repeat"  , objectFit : "cover" , backgroundSize : "100%" , backgroundImage : `url(${BG})` }}  >
    {/* <div style={{ width : "100%" , height : '100%' , position : 'absolute' , zIndex : 1 ,   objectFit : "cover" , backgroundSize : "100%" , backgroundImage : `url(${BGBackdrop})` }}>&nbsp;</div> */}
      <div style={{padding : "90px" }}>
      <h1 className='fw-bold fs-extra' style={ {color : "white" } }>Explore</h1>
      <h1 className='fw-light' style={ { color : "white" } }>Potential you as money you can earn</h1>
      <div style={{padding : "30px"}}>

      <Form.Label className="fs-4" style={{color : "white"}}  htmlFor="basic-url">Temukan tempat turumu yang paling wenak</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control className='fs-3 fw-bold' id="basic-url" aria-describedby="basic-addon3" />
        <Button variant="warning" className='fw-bold fs-3' style={{ color : "white" , padding : "20px"}} id="button-addon2">
          Button
        </Button>
      </InputGroup>

    </div>
      </div>
    </Container>
    <Container className='d-flex justify-content-evenly mt-n1' style={{marginTop : "-60px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='pb-5'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 d-flex text-muted mt-3">
          <img className='mx-auto' src={GaransiImg} alt="" width={"50%"} height={"50%"} srcset="" />
        </Card.Subtitle>
        <Card.Text className='text-center fw-bold pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Text className='text-center fw-normal text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='pb-5'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 d-flex text-muted mt-3">
          <img className='mx-auto' src={OppaKorea} alt="" width={"50%"} height={"50%"} srcset="" />
        </Card.Subtitle>
        <Card.Text className='text-center fw-bold pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Text className='text-center fw-normal text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='pb-5'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 d-flex text-muted mt-3">
          <img className='mx-auto' src={OppaKorea} alt="" width={"50%"} height={"50%"} srcset="" />
        </Card.Subtitle>
        <Card.Text className='text-center fw-bold pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Text className='text-center fw-normal text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body className='pb-5'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 d-flex text-muted mt-3">
          <img className='mx-auto' src={OppaKorea} alt="" width={"50%"} height={"50%"} srcset="" />
        </Card.Subtitle>
        <Card.Text className='text-center fw-bold pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Text className='text-center fw-normal text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default App
