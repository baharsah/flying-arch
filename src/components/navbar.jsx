import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import NavbarBG from '../assets/e.png';
import Icn from '../assets/Icon.png';
import React, { useState , useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../assets/bs/profile.png'
import { Dropdown , Alert } from 'react-bootstrap';
import { BsFillCaretUpFill as CaretUp } from "react-icons/bs";
import { registerUser , checkUser, checkAuth, isAdmin} from '../modules/axios';


const CustomNavbar = 
() => {

  const nav = useNavigate()

  //useEffect for localstorage
  var [statusLogin , updatestatusLogin] = useState()
  var [statusAdmin , updatestatusAdmin] = useState()


  var destroySession = () => {
    localStorage.removeItem("isLogin")
    localStorage.removeItem("isAdmin")
    localStorage.removeItem("user")
    updatestatusAdmin(null)
    updatestatusLogin(null)
    console.log(statusLogin)
  }
  useEffect(() => {

    updatestatusLogin(localStorage.getItem("isLogin"))
    updatestatusAdmin(localStorage.getItem("isAdmin"))


  } , [])

  //switchto

  const switchToRegister = () => {
    setShowSignin(false)
    setShowSignup(true)
  }
  const switchToLogin = () => {
    setShowSignin(true)
    setShowSignup(false)

  }

  // Register Status

  const [emailStatusAvail , setEmailStatusAvail] = useState(null)
  const [registerSuccess , setRegisterSuccess] = useState(null)
  // const [hidingRegisterModal , setHidingRegisterModal] = useState(null)

  //end
  const [isOpen, usetIsOpen] = useState(false);

  const setIsOpen = () => {
    usetIsOpen(true)
    setTimeout(() => {
      usetIsOpen(false)
    },9000)
  }

  // const nav = useNavigate()
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignin = () => setShowSignin(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleShowSignup = () => setShowSignup(true);


const [signinData , setSigninData] = useState(); 
const [loginSuccess , setLoginSuccess] = useState(false)

const updateSigninData = e => {
  // e.preventDefault()
  setSigninData({...signinData,
    [e.target.name]: e.target.value
})
}

const submitSigninData = e => {
  e.preventDefault()
  // console.log(data)
  checkUser(signinData.email).then((r) => {
    if (r.data.length > 0){
      checkAuth(signinData.email , signinData.pass).then((r) => {
        if(r.data.length > 0 ){
          // console.log(isAdmin(r.data.email) + "adalah admin")

          setLoginSuccess(true)
          localStorage.setItem('isLogin' , true)
    localStorage.setItem("user" , r.data.email)
          setTimeout(() => {
            setLoginSuccess(false)
          handleCloseSignin()
            updatestatusLogin("true")
        } , 2000
          )
          isAdmin(r.data.email).then((r) => {
            if(r.data.length > 0){updatestatusAdmin(true) ;localStorage.setItem("isAdmin" , true)}
          })  
        }
      })
    }
  })

}

const [signupData , setSignupData] = useState(); 

const updateSignupData = e => {
  // e.preventDefault()
  console.log('registerEventType')

  setSignupData({...signupData,
    [e.target.name]: e.target.value
})
}

const submitSignupData = e => {
  e.preventDefault()
   console.log('registerEvent')

   checkUser(signupData.email).then((response) => {

    if(response.data.length > 0){
      setEmailStatusAvail(true)
    }else{
      setRegisterSuccess(true)
      registerUser(signupData)
      setEmailStatusAvail(false)
      setTimeout(() => {
        setShowSignup(false)
        setShowSignin(true)
        setRegisterSuccess(false)
        setEmailStatusAvail(false)
      } ,2000)
      
    }
   } )
  // registerUser(signupData)

}

// console.log(e)






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
    {(statusLogin != "true") &&
    <>
    <Button variant="warning" onClick={handleShowSignin} className="me-3 fw-bold pt-2 pb-2 ps-2 pe-2">Login</Button>
    <Button className="fw-bold pt-2 pb-2 ps-2 pe-2" onClick={handleShowSignup} variant="outline-warning">Signup</Button>
    </>
}
     { (statusLogin != null) &&<>
    <Dropdown>
    <Button onClick={() => setIsOpen(!isOpen) } variant="warning" className="rounded-circle p-1 fw-bold"> <img className='rounded-circle' src={Profile} width="50" height='50' alt="" srcset="" /> </Button>
    
    <Dropdown.Menu className={'mt-3'} show={isOpen}>
      <div style={{position : 'absolute' , transform : 'translateY(-25px)'  }}><CaretUp  style={{ color : "white" ,  width : 30 , height : 30}}></CaretUp></div>
      { (localStorage.getItem('isAdmin') == null) && <><Dropdown.Item eventKey="2" onClick={() => {
          nav('trx')
      }}>Trip</Dropdown.Item>
      <Dropdown.Item onClick={destroySession}>Logout</Dropdown.Item></> }
      { (localStorage.getItem('isAdmin') != null) && <><Dropdown.Item eventKey="2" onClick={() => {
          nav('profile')
      } }>Profile</Dropdown.Item><Dropdown.Item eventKey="2">Pay</Dropdown.Item>
      <Dropdown.Item onClick={destroySession}>Logout</Dropdown.Item></> }
    </Dropdown.Menu>
    </Dropdown>
    </>
}
    {/* {isOpen && <div style={{backgroundColor : 'white'}}> DropDown Here </div>} */}
        
  </Navbar.Collapse>
</Container>
{/* area modal */}


<Modal show={showSignin} onHide={handleCloseSignin}>
            <h1 className='text-center mt-3'>Signin</h1>
   

        <Modal.Body>
          <form onSubmit={submitSigninData} method="post">
          <Alert show={loginSuccess} variant="success">
      <Alert.Heading>Mantap jiwa!</Alert.Heading>
      <p>
        dah bisa login gak, tuh.
      </p>
    </Alert>
          <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                placeholder="name@example.com"
                onChange={updateSigninData}
                // autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name='pass' 
                onChange={updateSigninData}
                className=''
              />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="warning" type="submit" className=" fw-bold pt-2 pb-2 ps-2 pe-2 text-white">Signin</Button>
            </div>
          </form>
        <h3>Kamu belum daftar? <a onClick={switchToRegister}>Klik sini dong!</a></h3>

        </Modal.Body>

      </Modal>
<Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submitSignupData}>
        <Alert show={registerSuccess} variant="success">
      <Alert.Heading>Mantap jiwa!</Alert.Heading>
      <p>
register gak, tuh.
      </p>
    </Alert>
    <Alert variant="warning" show={false}>
      <Alert.Heading>Kayaknya ada yang salah, deh.</Alert.Heading>
      <p>
      tapi apa, ya? kayaknya dari kita, deh.
      </p>
    </Alert>
    <Alert variant="warning" show={emailStatusAvail}>
      <Alert.Heading>Email kamu udah kepake, nih.</Alert.Heading>
      <p>
      coba pake email lain ya, gais.
      </p>
    </Alert>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Asep Knalpot"
                name='nama' 
                className=''
                onChange={updateSignupData}
              />
            </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                placeholder="name@example.com"
                onChange={updateSignupData}
                // autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name='pass' 
                onChange={updateSignupData}

                className=''
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="+62"
                name='phone' 
                onChange={updateSignupData}
                className=''
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <Form.Control
         as="textarea" 
         rows={3} 
         name="address"
         onChange={updateSignupData}
         />
      </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="warning" type='submit' className=" fw-bold pt-2 pb-2 ps-2 pe-2 text-white">Signup</Button>
            </div>
          </form>
        <h3>Kamu udah daftar? <a onClick={switchToLogin}>Klik sini dong!</a></h3>

        </Modal.Body>
      </Modal>
</Navbar>

}





export default CustomNavbar ; 