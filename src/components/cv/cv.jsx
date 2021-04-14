import React from 'react';
import './styles/cv.css'


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
            'position':'It Technician',
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
            <h1 className='cv-title'>Luis Daniel Herrera Aguirre</h1>
            <div className='cv-body'>
                <div className='cv-experience' >
                <hr className='g-hr'/>
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

                <div className='cv-skills' >
                    

                </div>
            </div>
        </div>
    )
}

export default CV_info;