import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import NavbarBG from '../assets/e.png';
import Icn from '../assets/Icon.png';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = 
() => {

  // const nav = useNavigate()
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignin = () => setShowSignin(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleShowSignup = () => setShowSignup(true);

return  <Navbar className='fixed-top' variant="dark" style={ { backgroundRepeat: "no-repeat"  , objectFit : "cover" , backgroundSize : "100%" ,  backgroundImage : `url(${NavbarBG})`} } >
<Container>
  <Navbar.Brand href="#home">
    <Link to='/'><img width="75%" height="75%" src={Icn}></img></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Button variant="warning" onClick={handleShowSignin} className="me-3 fw-bold pt-2 pb-2 ps-2 pe-2">Login</Button>
    <Button className="fw-bold pt-2 pb-2 ps-2 pe-2" onClick={handleShowSignup} variant="outline-warning">Signup</Button>
  </Navbar.Collapse>
</Container>
{/* area modal */}


<Modal show={showSignin} onHide={handleCloseSignin}>
            <h1 className='text-center mt-3'>Signin</h1>
   

        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                placeholder="name@example.com"
                // autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name='pass' 
                className=''
              />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="warning"  className=" fw-bold pt-2 pb-2 ps-2 pe-2 text-white">Signin</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
<Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Asep Knalpot"
                name='fullName' 
                className=''
              />
            </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                placeholder="name@example.com"
                // autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name='pass' 
                className=''
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="+62"
                name='phone' 
                className=''
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control
         as="textarea" 
         rows={3} 
         name="Address"
         />
      </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="warning"className=" fw-bold pt-2 pb-2 ps-2 pe-2 text-white">Signup</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
</Navbar>

}





export default CustomNavbar ; 