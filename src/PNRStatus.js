import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';

function PNRStatus() {
  return (
    <div>
                  <Container>
      <Row>
  <Col xs={12} md={4}>
    <img src='TitleRail.png' alt='train'  />
  </Col>
  <Col xs={12} md={6}>
    <h5>Indian Railway</h5>
    <p>
      Indian Railways is the largest rail network in Asia and the world's
      second-largest under NavLink single management system. It operates more than
      20,000 passenger and freight trains daily, connecting over 7,000 stations
      across the country.
    </p>
  </Col>
</Row>
</Container>

      <Container>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="PNRImage.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 variant="dark" style={{ color: "black" }}>PNR Status</h1>
        <h3 style={{textAlign:'left' }}>Enter PNR No. : </h3>
        <div>
        <input type='text' style={{ margin:'2%' ,width:'100%', fontSize:'120%' }} placeholder='Enter PNR Nunber' ></input>
        </div>
        <div>
        <Button variant="dark" size="lg">
        GET PNR STATUS
      </Button>

      </div>

                    </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
      </Container>

    </div>
  )
}

export default PNRStatus
