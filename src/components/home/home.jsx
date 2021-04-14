import React from 'react';
import { InfoCard } from './components/info_card/info_card';


import './styles/home.css'

function Home(){
    return(
        <div className='home-div'>
            <h1 className='h-h1' >Welcome</h1>
            <hr className='g-hr' />
            <div className='home-myskills' >
                <h2 className='subtitle' > <span>My </span>Skills </h2>
                
                <InfoCard title='Python Development' 
                img='https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/info/Python.jpeg?raw=true'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'
                direction = '/python'
                />
                <hr className='g-hr' />
                <InfoCard title='Web Development' 
                img='' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'
                direction = '/web'
                />
                <hr className='g-hr' />
                <InfoCard title='Hardware Projects' 
                img='' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'  
                direction = '/hardware'
                />
                <hr className='g-hr' />
                
            </div>
            
        </div>
    )
}

export default Home;