import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/info_card.css'


function handleClick(name){
    console.log(name)
}

export const InfoCard = ({title, img, text}) =>{
    return(
        <div className='info-card-div' onClick={() => handleClick('sucess')} >
            <div>
            <img className='info-img' src={img} alt=""/>
            </div>
            <div>
            <h3> {title} </h3>
            <p> {text} </p>
            <Button variant="primary" href='/python/' >Go to {title} page. </Button>
            </div>
        </div>
    )
}