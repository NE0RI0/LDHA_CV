import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, FormControl} from 'react';
import './styles/navibar.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';


const DropdownProjects=()=>{
    return(
      <DropdownButton
      menuAlign="right"
      title="Projects"
      id="dropdown-menu-align-right"
    >
      <Dropdown.Item href='./python' eventKey="1"> Python</Dropdown.Item>
      <Dropdown.Item href='./web'  eventKey="2">Web</Dropdown.Item>
      <Dropdown.Item href='./hardware'  eventKey="3">Hardware</Dropdown.Item>
    </DropdownButton>
    )
}

function NaviBar(){
    return(
        <div className='navibar-div' >
            <div className='home-navi' >
                <a href='./'> <FontAwesomeIcon  className='navibar-icons' icon={faHome} /> </a>
            </div>
            <div className='body-navi' >

            <Nav fill='true' className="justify-content-center" activeKey="/home">
              <Nav.Item>
                  <Button href='./' className='navibar-icons' >Home</Button>
              </Nav.Item>
              <Nav.Item>
                  <Button href='./cv' className='navibar-icons'>Resume</Button>
              </Nav.Item>
              <Nav.Item>
              <Button href='./#aboutme' className='navibar-icons'>AboutMe</Button>
              </Nav.Item>
              <Nav.Item>
                <DropdownProjects  className='navibar-icons'/>
              </Nav.Item>
            </Nav>

            </div>
            <div className='social-navi' >
                <a href='https://www.facebook.com/luis.herrera.777/'> <FontAwesomeIcon className='navibar-icons' icon={faFacebook}/></a>
                <a href='https://www.linkedin.com/in/luis-daniel-herrera-aguirre-0b8240173'> <FontAwesomeIcon className='navibar-icons' icon={faLinkedin}/></a>
                <a href='mailto:0herreraluis0@gmail.com'> <FontAwesomeIcon className='navibar-icons' icon={faEnvelopeSquare}/></a>
            </div>
        </div>
    )
}

export default NaviBar;