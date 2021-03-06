import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/cv.css'
import { Col, Row } from 'react-bootstrap';


const ExperienceCard = (info) => {
    return(
        <div >
            <h3 className='cv-company' >{info.info.company}</h3>
            <h4 className='cv-position'>{info.info.position}</h4>
            <p className='cv-dates'> {info.info.dates} </p>
            <hr className='g-hr'/>
            <ul className='cv-tasks' >
                {info.info.tasks.map(task =>(
                    <li className='cv-task'> {task} </li>
                ))}
            </ul>
        </div>
    )
}

function CV_info(){
    const cv_data = [
        {
            'company':'Primal Technologies', 
            'position':'Special Projects Manager',
            'dates':'January 2019 - February 2021', 
            'tasks':[
                "Write Code.",
                "Reviewing code work for accuracy and functionality.",
                "Delegating tasks to team members.",
                "Keeping up-to-date with industry trends and technology developments.",
                "Develop testing systems (software and hardware)",
                "Design and Implement Software.",
                "Design communication interfaces with hardware (mainly I2C, Serial, TCP/IP)",
                "Database Design (Mainly MongoDB and SQL)",
                "Analyze Data.",
                "Mentoring.",
                "Providing general design guidance.",
                "Aid in planning product development and timelines.",
                "Provide feedback to marketing and sales teams.",
                "Discuss and aid the top managers to make sure that the development team and technologies being selected are aligned with the business's goals and vision of the company.",
            ]
        },
        {
            'company':'Dunas Tech', 
            'position':'Lead Developer',
            'dates':'April 2020 - January 2021', 
            'tasks':[
                "Drone design",
                "Drone configuration",
                "Drone Assembly",
                "Drone Testing",
                "Drone Deployment",
                "Circuit welding",
                "Firmware development",
                "Database Design",
                "Database management",
                "Develop Vision Systems",
                "Develop Access control System",
                "Develop Communication interfaces(I2c, Serial, TCP/IP)",
            ]
        },
        {
            'company':'Instituto Mexicano del Seguro Social (IMSS)', 
            'position':'IT Assistant',
            'dates':'June 2018 - December 2019', 
            'tasks':[
                "Preventive and corrective maintenance to equipment and Software.",
                "Software installation.",
                "Assistance with the expansion of the internal network.",
                "Update Databases.",
                "Equipment configuration.",
                "Tasks automation (Bash Scripts)",
                "Training employees.",
            ]
        },
        {
            'company':'QDebit', 
            'position':'Junior Developer',
            'dates':'January 2018 - May 2018', 
            'tasks':[
                "Attend and contribute to company development meetings.",
                "Learn the codebase and improve coding skills.",
                "Write and maintain code.",
                "Minor bug fixes.",
                "Monitor the technical performance of internal systems.",
                "Respond to requests from the development team.",
                "Gather information from consumers about program functionality.",
                "Write reports.",
                "Conduct development tests.",
            ]
        },
        {
            'company':'Freelancer', 
            'position':'IT Technician',
            'dates':'2016 - November 2019', 
            'tasks':[
                "Setting up hardware",
                "Install and configure software and drivers.",
                "Maintain and repair equipment and peripheral devices.",
                "Install small LAN and WAN networks, and manage components",
                "ervers, clients, IPs, etc.)",
                "Perform regular upgrades to ensure systems remain updated.",
                "Troubleshoot system failures or bugs and provide solutions to",
                "store functionality.",
                "Arrange maintenance sessions to discover and mend",
                "e ciencies.",
                "Keep records of repairs and fixes.",
            ]
        },
    ]
    return(
        <div className='cv-div' >
            <div className='cv-header'>                
            <h1 className='cv-title'>Luis Daniel Herrera Aguirre</h1>
            </div>
            <hr className='g-hr'/>
            <div className='cv-body'>
                <Row>
                    <Col xs={12} md={7}>
                    <div className='cv-experience' >
                        <h2 className='cv-subtitle'>Experience</h2>
                        {cv_data.map(
                            job => (
                                <div className='ec'> 

                                    <ExperienceCard info={job} />
                                    <hr className='g-hr'/>
                                </div>
                            )
                        )}
                    </div>
                    </Col>
                    <Col xs={12} md={5}>
                    <div className='cv-skills' >
                        <h2 className='cv-subtitle'>Skills</h2>
                        <div className='ec' >
                        <hr className='g-hr'/>
                            <ul className='cv-tasks' >
                                <li className='cv-task' >Broad knowledge of the software development process and its technologies</li>
                                <li className='cv-task' >Strong knowledge of computer languages Python, C++, Java, Java Script, HTML, CSS and JSON.</li>
                                <li className='cv-task' >Knowledge of web technologies and frameworks(ReactJS, Bootstrap, Django, Flask).</li>
                                <li className='cv-task' >Experienced with relational and no SQL databases.</li>
                                <li className='cv-task' >General understanding of electrical circuits</li>
                                <li className='cv-task' >Experienced with development tools like Git repositories, Dockers and Python Environments</li>
                                <li className='cv-task' >4 years of experience with Linux</li>
                                <li className='cv-task' >Good communication skills -Quick learner</li>
                            </ul>
                            <hr className='g-hr'/>
                        </div>
                        <h2 className='cv-subtitle'>Languages</h2>
                        <div className='ec'>
                            <hr className='g-hr'/>
                            <ul className='cv-tasks' >
                                <li className='cv-task' >Spanish: Native</li>
                                <li className='cv-task' >English: 90%</li>
                            </ul>
                            <hr className='g-hr'/>
                        </div>
                        <h2 className='cv-subtitle'>Studies</h2>
                        <div className='ec'>
                            <hr className='g-hr'/>
                                <span className='cv-company' >Universidad Autonoma de Ciudad Ju??rez</span><br/>
                                <span className='cv-position' >Systemas Computacionales</span>
                                <span className='cv-company' >(Computer Science)</span><br/>
                                <span className='dark-white' >June 2015 - December 2019</span>
                            <hr className='g-hr'/>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default CV_info;