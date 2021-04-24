import React from 'react';
import { InfoCard } from './components/info_card/info_card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'react-bootstrap';

function Home(){
    const python_content = 'This page shows some of the projects I have worked on using the Python language, '
    const web_content = 'This page contains a summary of multiples projets '
    const hardware_content = 'This page contains a summary of multiples projets '

    return(
        <div className='home-div'>
             <h1  className='h-h1 text-center padding-small' > <span> Luis Daniel </span> Herrera Aguirre</h1>
            <hr className='g-hr' />
            <div className='home-aboutme'>
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
                    <h2 className='subtitle' > <span>My </span>Skills </h2>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
                                    </Row>
                                </Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
                                    </Row>
                                </Col>
                                
                            </Row>
                            <Row>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
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
                                    <Col> <p className='' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sapiente minus nostrum earum, non totam facilis, voluptates ad aspernatur at vel! Saepe at ipsum excepturi culpa voluptatibus asperiores inventore rerum. </p></Col>
                                    </Row>
                                </Col>
                            </Row>
                            
                            
                        </Container>
                        <Button  className='home-aboutme' href='./cv' >Complete Resume</Button>

                    </div>
                    <hr className='g-hr'/>
                </div>
            </div>

            <div className='home-myskills'>
                <h2 className='subtitle' > <span>My </span>Projects </h2>
                <hr className='g-hr'/>
                <InfoCard title='Python Development'
                img='https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/info/Python.jpeg?raw=true'
                text={python_content}
                direction = '/python'
                />
                <hr className='g-hr' />
                <InfoCard title='Hardware Projects'
                img='https://hackster.imgix.net/uploads/attachments/1212444/_xnTDBrILpX.blob?auto=compress%2Cformat&w=900&h=675&fit=min'
                text={hardware_content}
                direction = '/hardware'
                />
                <hr className='g-hr' />
                <InfoCard title='Web Development'
                img='https://www.smartdatacollective.com/wp-content/uploads/2018/04/react-JS-for-development-training.jpg'
                text={web_content}
                direction = '/web'
                />
                <hr className='g-hr' />
                
                
            </div>
            
        </div>
    )
}

export default Home;