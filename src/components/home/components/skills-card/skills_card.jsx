import React from 'react'
import { Col, Row } from 'react-bootstrap';


function SkillsCard() {
    const skills = {
        'python':{
            'name':'Python',
            'stars':4,
            'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequatur molestiae inventore modi omnis dolor, vel neque velit voluptatem voluptas perferendis repellat est delectus doloremque ipsa cum reprehenderit, quae facere!',
        },
        'c++':{
            'name':'C++',
            'stars':4,
            'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequatur molestiae inventore modi omnis dolor, vel neque velit voluptatem voluptas perferendis repellat est delectus doloremque ipsa cum reprehenderit, quae facere!',
        },
        'react':{
            'name':'ReactJs',
            'stars':4,
            'info': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequatur molestiae inventore modi omnis dolor, vel neque velit voluptatem voluptas perferendis repellat est delectus doloremque ipsa cum reprehenderit, quae facere!',
        }
    
    }
    return(
        <div>
            <Row>
                
            </Row>
        </div>
    )


}

export default SkillsCard;