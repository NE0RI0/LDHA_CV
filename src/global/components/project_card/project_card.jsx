import React from 'react';
import './styles/project_card.css';


// Data required img, title, about, technologies, status
const ProjectCard = ({props }) =>{

    return(
        <div className='project-div'>
            <img src={props.props.img}/>
            <h2 className='h-h2' >{props.props.title}</h2>
            <p>{props.props.about}</p>
            <p>{props.props.technologies}</p>
            <p>{props.props.status}</p>
        </div>
    )
}

export default ProjectCard;