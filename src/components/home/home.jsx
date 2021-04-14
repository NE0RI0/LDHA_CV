import React from 'react';
import { InfoCard } from './components/info_card/info_card';


import './styles/home.css'

function Home(){
    return(
        <div className='home-div'>
            <h1 className='h-h1' >Welcome</h1>
            <hr className='g-hr' />
            <div className='home-aboutme'>
                <h2 className='subtitle'> <span>About</span> Me </h2>
                <hr className='g-hr' />
                <p className='home-content' >&emsp; Hello, my name is Luis, and I am a software developer. I mainly work with python and C++, but i also have esperience in web development using frameworks like ReactJs, Django and Flask. I've worked with companies like BRP, Opticas 20-20, Tutorel and Dunas Tech, on projects that goes from web aplications to desktop aplications that icluded vision systems, ai, databases (both relational and non-relational databases.) and external hardware, some of them of my own design.<br/>

                &emsp;I have a bachelor's degree in computer science from the Autonomous University of Ciudad Juarez , and multiple courses from Google digital academy and Udemy.


                
                </p>
                <hr className='g-hr' />

            </div>
            <div className='home-myskills' >
                <h2 className='subtitle' > <span>My </span>Skills </h2>
                <hr className='g-hr'/>
                <InfoCard title='Python Development' 
                img='https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/info/Python.jpeg?raw=true'
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'
                direction = '/python'
                />
                <hr className='g-hr' />
                <InfoCard title='Web Development' 
                img='https://www.smartdatacollective.com/wp-content/uploads/2018/04/react-JS-for-development-training.jpg' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'
                direction = '/web'
                />
                <hr className='g-hr' />
                <InfoCard title='Hardware Projects' 
                img='https://hackster.imgix.net/uploads/attachments/1212444/_xnTDBrILpX.blob?auto=compress%2Cformat&w=900&h=675&fit=min' 
                text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum quos eos. Ipsam, sunt ipsum quas est tenetur ab distinctio. Soluta, at error nesciunt voluptatum doloribus animi ut perferendis itaque.'  
                direction = '/hardware'
                />
                <hr className='g-hr' />
                
            </div>
            
        </div>
    )
}

export default Home;