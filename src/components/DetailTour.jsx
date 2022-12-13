import React from 'react'
import { Container } from 'react-bootstrap'

function DetailTour() {
  return (
    <>
    <Container style={{height : "50px"}}></Container>
    <Container className='mt-5'>
        <h1 className='mt-1 text-center'> Detail Trip</h1>
        <p className='text-center'>Detail trip you want to sleep at.</p>
    </Container>
    </>
  )
}

export default DetailTour