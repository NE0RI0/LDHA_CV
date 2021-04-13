import React from 'react';
import './styles/footer.css';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactMe(){
    return(
        <div className='footer'>
            <h1 className='footer-title'> Contact Me</h1>
            <hr className='g-hr'/>
            <div className='footer-links'>

                <a className='footer-link'> 
                    <FontAwesomeIcon icon={faLinkedin}/>
                    LinkedIn
                </a>

                <a className='footer-link'>
                    <FontAwesomeIcon icon={faEnvelopeSquare}/>
                    Email
                    </a>
                    
                <a className='footer-link'>
                    <FontAwesomeIcon icon={faPhone}/>
                    Phone: (+52) 656 2840193                    
                    </a>

            </div>
        </div>
    )
}

export default ContactMe;