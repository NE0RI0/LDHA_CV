import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/info_card.css'


function handleClick(name){
    console.log(name)
}

export const InfoCard = ({title, img, text, direction}) =>{
    return(
        <div className='info-card-div' onClick={() => handleClick('sucess')} >
            <div>
            <img className='info-img' src={img} alt=""/>
            </div>
            <div>
            <h3 className='info-title' > {title} </h3>
            <p className='info-text' >  {text} </p>
            <Button variant="primary" href={direction} >Go to {title} page. </Button>
            </div>
        </div>
    )
}