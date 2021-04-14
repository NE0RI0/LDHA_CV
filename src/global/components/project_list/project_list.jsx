import React from 'react';
import ProjectCard from '../project_card/project_card';
import './styles/project_list.css';


// Data required img, title, about, technologies, status
const ProjectList = ({props }) =>{

    return(
        <div className='plist-div'>
            {props.monsters.map(monster =>(
            <ProjectCard key = {} project = {} />

        ))}
        </div>
    )
}

export default ProjectList;