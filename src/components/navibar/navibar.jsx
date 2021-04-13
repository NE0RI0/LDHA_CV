import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles/navibar.css';


function NaviBar(){
    return(
        <div className='navibar-div' >
            <p >
                <FontAwesomeIcon className='navibar-icons' icon={faFacebook}/>
                <FontAwesomeIcon className='navibar-icons' icon={faLinkedin}/>
                <FontAwesomeIcon className='navibar-icons' icon={faEnvelopeSquare}/>

            </p>
        </div>
    )
}

export default NaviBar;