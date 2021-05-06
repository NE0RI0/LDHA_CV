import React from 'react';
import './styles/footer.css';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe(){
    return(
        <div className='footer'>
            <hr className='g-hr'/>
            <h1 className='footer-title'> Contact Me</h1>
            <hr className='g-hr'/>
            <div className='footer-links'>

                <a className='footer-link' href='https://www.linkedin.com/in/luis-daniel-herrera-aguirre-0b8240173'> 
                    <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/>
                    LinkedIn
                </a>
                
                <a className='footer-link'>
                    <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                    Phone: (+52) 656-2840193                    
                    </a>

                <a className='footer-link' href='mailto:0herreraluis0@gmail.com' >
                    <FontAwesomeIcon className='footer-icon' icon={faEnvelopeSquare}/>
                    Email
                    </a>
                    

            </div>
        </div>
    )
}

export default ContactMe;