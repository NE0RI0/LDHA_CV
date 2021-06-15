import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/info_card.css'
import { Col, Row } from 'react-bootstrap';


function handleClick(name){
    console.log(name)
}

export const InfoCard = ({title, img, text, direction}) =>{
    return(
        <Row  onClick={() => handleClick('sucess')} >
                <Col xs = {12} lg={4}>
                    <center>
                    <img className='info-img' src={img} alt=""/>
                    </center>
                </Col>
                {/* <Col md = {0} lg={1}></Col> */}
                <Col xs={12} lg={8}>
                    <center>
                    <h3 className='info-title' > {title} </h3>
                    <p className='info-text' >  {text} </p>
                    <Button variant="primary" href={direction} >Go to {title} page. </Button>
                    </center>
                </Col>
        </Row>
    )
}