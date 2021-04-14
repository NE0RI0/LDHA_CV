import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import ProjectCard from '../../global/components/project_card/project_card';
import './styles/python_info.css'




function Python_info(){

    const Projects = [
        {
            'img':'',
            'name':'',
            'about':'',
            'technologies':'',
            'status':'',
        },
        {
            'img':'',
            'name':'',
            'about':'',
            'technologies':'',
            'status':'',
        },
        
    ]

    

    return(
        <div className='python-div'>
            <div className=''>
                <h1>welcomes</h1>
                <CardColumns>
                    
                    
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        <div className='text-right blockquote-footer' >
                        <small className="text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </div>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    
                    
                    
                    
                    
                </CardColumns>

                {/* <ProjectCard></ProjectCard> */}
            </div>
        </div>
    )
}

export default Python_info;