import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/info_card.css'
import { Col, Row } from 'react-bootstrap';


function handleClick(name){
    console.log(name)
}

export const InfoCard = ({title, img, text, direction}) =>{
    return(
        <div className='info-card-div' onClick={() => handleClick('sucess')} >
            <Row>
                <Col xs = {12} md={4}>
                    <center>
                    <img className='info-img' src={img} alt=""/>
                    </center>
                </Col>
                {/* <Col md = {0} lg={1}></Col> */}
                <Col xs={12} md={8}>
                    <div className='content-div'>
                    <center>
                    <h3 className='info-title' > {title} </h3>
                    <p className='info-text' >  {text} </p>
                    <Button variant="primary" href={direction} >Go to {title} page. </Button>
                    </center>
                    </div>
                </Col>
            </Row>
        </div>
    )
}