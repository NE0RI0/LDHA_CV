import React from 'react';
import './styles/footer.css';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

function ContactMe(){
    return(
        <div className='footer'>

            <h1 className='footer-title'> Contact Me</h1>
            <hr className='g-hr'/>
            <Row >
                
                <Col md={12} lg={4}>
                    <a className='footer-link' href='https://www.linkedin.com/in/luis-daniel-herrera-aguirre-0b8240173'> 
                        <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/>
                        LinkedIn:
                        <p className="phone-p">Luis Daniel Herrera Aguirre</p>
                    </a>
                </Col>
                <Col md={12} lg={4}>
                    <a className='footer-link' href='mailto:0herreraluis0@gmail.com' >
                        <FontAwesomeIcon className='footer-icon' icon={faEnvelopeSquare}/>
                        Email:
                        <p className="phone-p"> 0herreraluis0@gmail.com</p>
                    </a>
                </Col>
                <Col md={12} lg={4}>
                    <a className='footer-link'>
                        <center>
                        <FontAwesomeIcon className='footer-icon' icon={faPhone}/>
                        Phone:
                        <p className="phone-p">(+52) 656-2840193</p>
                        </center>
                    </a>
                </Col>
                
            </Row>
        </div>
    )
}

export default ContactMe;