import React , {useState} from 'react'
import { Container , Row , Col , Button , Modal} from 'react-bootstrap'
import LogoDark from '../assets/Icon.svg'
import QRCode from "react-qr-code";
import { useNavigate } from 'react-router';

function PaymentPending(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  const  nav = useNavigate()

  const   onPay = () => {
        nav("/profile")
    }
  return (

    <>
        <Container className='mt-5 pt-5 ms-5 ps-5'>
      {/* Whitespaces */}
    </Container>


    <Container className={"m-5 p-5 bg-white border border-5 rounded-3"}>
        <Row>
            <Col>
            <img src={LogoDark} alt="" />
            </Col>
            <Col>
            {/* <h1>Booking</h1> */}
            </Col>
            <Col>
            <h1>Booking</h1>
            <h4 className='text-muted fw-light'><b>Sunday</b> 30 Oct 2022</h4>
            {/* </Col>
            <Col> */}
            
            </Col>
        </Row>
        <Row>
            <Col>
                        

            <Container>

        <Row>
            <Col>
            <h1>Judul</h1>
            <h3 className='text-muted'>Location</h3>
            </Col>
            <Col>
            <h4>Date Trip</h4>
            <h5 className='text-muted'>Tanggal</h5>
            </Col>
            <Col>
            <h4>Date Trip</h4>
            <h5 className='text-muted'>Tanggal</h5>
            </Col>

        </Row>
        <Row>
            <Col>
            { props?.position == 'profile' && <Button variant='outline-warning' className='m-2'>Waiting Approval</Button> }
            </Col>
            <Col>
            <h4>Date Trip</h4>
            <h5 className='text-muted'>Tanggal</h5>
            </Col>
            <Col>
            <h4>Date Trip</h4>
            <h5 className='text-muted'>Tanggal</h5>
            </Col>

        </Row>
                
            </Container>
            </Col>
            <Col sm={4} className="p-5">
            <QRCode value="Mamang Garox"></QRCode>
            </Col>
        </Row>
        <Row>
            <Container>
                <Row className='border-bottom'>
                <Col>
                <h3>No</h3>
                </Col>
                <Col>
                <h3>Fullname</h3>
                </Col>
                <Col>
                <h3>Gender</h3>
                </Col>
                <Col>
                <h3>Phone</h3>
                </Col>
                <Col>
                <h3>&nbsp;</h3>
                </Col>
                <Col>
                <h3>&nbsp;</h3>
                </Col>
                
                </Row>
                <Row className='border-bottom'>
                <Col>
                <h5>1</h5>
                </Col>
                <Col>
                <h5>Asep Knalpot</h5>
                </Col>
                <Col>
                <h5>Cerobong Asap (tbh)</h5>
                </Col>
                <Col>
                <h5>(Kosong delapan)</h5>
                </Col>
                <Col>
                <h5>Qty : </h5>
                </Col>
                <Col>
                <h5>1</h5>
                </Col>
                
                </Row>
                <Row className=''>
                <Col xl={4}>

                </Col>
                <Col xl={4}>
                </Col>

                <Col>
                <h5>Total</h5>
                </Col>

                <Col>
                <h5>1</h5>
                </Col>

                
                </Row>
                <Row>
                    <Col xl={5} md={5}></Col>
                <Col md={{offset : 5}}>
        { props?.position != 'profile' && <Button variant="warning" onClick={handleShow} className="fs-5 text-uppercase text-white me-3 fw-bold pt-2 pb-2 ps-5 pe-5">pay</Button> } 
          </Col>
                </Row>


            </Container>
        </Row>


    </Container>

    {/* modal for action move to profile */}


  
      <Modal show={show} onHide={handleClose} onExit={onPay}>

        <Modal.Body>Pembayaran anda telah diproses. silahkan sentuh atau klik apa saja untuk ke profil anda.</Modal.Body>

      </Modal>
    </>
  )
}

export default PaymentPending