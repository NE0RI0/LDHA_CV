import React from 'react';
import { InfoCard } from './components/info_card/info_card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'react-bootstrap';

function Home(){
    const python_content = 'Here are some examples of the libraries i\'ve used in multiple projects'
    const web_content = 'Here are some examples of the technologies i\'ve used for web development (stil on development)'
    const hardware_content = 'Here you can find some projects that involves embedded systems, drones and vision systems.'

    return(
        <div className='home-div'>
             <h1  className='h-h1 text-center padding-small' > <span> Luis Daniel </span> Herrera Aguirre</h1>
            <hr className='g-hr' />
            <div className='home-aboutme' id='aboutme' >
                <h2 className='subtitle'> <span>About</span> Me </h2>
                <hr className='g-hr' />
                <p className='home-content' > Hello, my name is Luis, and I am a software developer. I mainly work with python and C++, but i also have experience in web development using frameworks like ReactJs, Django and Flask. I've worked with companies like BRP, Opticas 20-20, Tutorel and Dunas Tech, on projects that goes from web aplications to desktop aplications that icluded vision systems, ai, databases (both relational and non-relational databases.) and external hardware.<br/>
                </p><p className='home-content' >
                I have a bachelor's degree in computer science from the Universidad Autonoma de Ciudad Juarez , and multiple courses from Google digital academy and Udemy.

                </p>
                <hr className='g-hr' />

            </div>
            <div className='home-myskills' >
                <div className='home-myprojects' >
                    <h2 className='subtitle' > <span>My</span> Skills </h2>
                    <hr className='g-hr'/>
                    <div className='skills-div align-c ' >
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                    <Col> <h4>Python</h4></Col>
                                    <Col> <p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col> <p className='' > As a python developer i've been responsable of writing and testing code, integrating applications with third-party web services, improve responsiveness and overall performance, assess and prioritize feature requests and coordinate with internal teams to understand user requirements and provide technical solutions  </p></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                    <Col> <h4>C++</h4></Col>
                                    <Col>
                                    <p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Mainly used for embedded systems to control mechanisms where speed is a must, like in gimbals on drones to ensure the best quality image while flying a drone, or data acquisition from multiple ultrasonic sensors to prevent collisions.  </p></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col>
                                    <Row>
                                    <Col> <h4>Linux</h4></Col>
                                    <Col>
                                    <p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Been working with linux systems since 2016. I've used it as my main development environment, also i use it on all the companion computers in the projects that require one, and i currently am running a local server that handle all  my database related tasks. </p></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                    <Col> <h4>RaspberryPi</h4></Col>
                                    <Col>
                                    <p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Mainly used for embedded systems, or as a controller or diagnosis tool for multiple systems.
                                    Also i have used it as temporary server for tasks that require a linux environment, as the main computer in a vigilance system and a companion computer on drones and some robots. </p></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                    <Col> <h4>Drone Development (Ardupilot)</h4></Col>
                                    <Col><p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Having worked on multiple projects involving drones, I have had to develop applications that could send instructions and receive information from them, or even
                                    I have had to add functions to them, installing companion computers, to add sensors, mechanisms, or make them capable of taking decisions by themselves. </p></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                    <Col> <h4>ReactJs</h4></Col>
                                    <Col>
                                    <p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Developed multiple web pages, going from simple presentation pages, to e-commerce websites, using libraries like redux and connectig to databases like firebase and mongo db. </p></Col>
                                    </Row>
                                </Col>
                                
                                
                            </Row>
                            <Row>
                                
                                <Col>
                                    <Row>
                                    <Col> <h4>OpenCV</h4></Col>
                                    <Col><p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > I've used this library on multiple projects for facial recognition, mobile robotics, object detection and movement detection. </p></Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                    <Col> <h4>Arduino</h4></Col>
                                    <Col><p className='align-stars' >
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p></Col>

                                    </Row>
                                    <Row>
                                    <Col> <p className='' > Mainly used on embedded systems to on drones and robots using I²C and serial comunication,   </p></Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                            
                        </Container>

                        <Button  className='cv-button' href='./#/cv' >Complete Resume</Button>

                    </div>
                    <hr className='g-hr'/>
                </div>
            </div>

            <div className='home-myskills'>
                <h2 className='subtitle' > <span>My</span> Projects </h2>
                <hr className='g-hr'/>
                <InfoCard title='Python Development'
                img='https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/info/Python.jpeg?raw=true'
                text={python_content}
                direction = '/#/python'
                />
                <hr className='g-hr' />
                <InfoCard title='Hardware Projects'
                img='https://hackster.imgix.net/uploads/attachments/1212444/_xnTDBrILpX.blob?auto=compress%2Cformat&w=900&h=675&fit=min'
                text={hardware_content}
                direction = '/#/hardware'
                />
                <hr className='g-hr' />
                <InfoCard title='Web Development'
                img='https://www.smartdatacollective.com/wp-content/uploads/2018/04/react-JS-for-development-training.jpg'
                text={web_content}
                direction = '/#/web'
                />
                <hr className='g-hr' />
            </div>
        </div>
    )
}

export default Home;