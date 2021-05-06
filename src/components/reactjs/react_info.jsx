import React from "react";
import { Card, CardColumns, Accordion } from "react-bootstrap";
import ProjectModal from "../../global/components/projectModal/modalProject";

import "./styles/react_info.css";

function React_info() {
  const Projects = [
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/opticas.png?raw=true",
      title: "Opticas 20-20",
      about: "",
      technologies: "Python, OpenV, Sockets",
      status: "",
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/database.png?raw=true",
      title: "Drone stadistics API",
      about: "",
      technologies: "",
      status: "",
    },
    // {
    //   img: "",
    //   title: "",
    //   about: "",
    //   technologies: "",
    //   status: "",
    // },
    // {
    //   img: "",
    //   title: "",
    //   about: "",
    //   technologies: "",
    //   status: "",
    // },
  ];
  return (
    <div className="python-div">
      <div className="projects-container">
      <h1 className='title' >Web</h1>
      <hr className='g-hr'/>
          <div className='python-welcome'>
            <p>As a python developer i've been responsable of writing and testing code, integrating applications with third-party web services, improve responsiveness and overall performance, assess and prioritize feature requests and coordinate with internal teams to understand user requirements and provide technical solutions</p>
          </div>
          <hr className='g-hr'/>
        <CardColumns>
        {Projects.map((project) => (
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={project.img} />
              <Card.Body className="project-card">
                <Card.Title>{project.title}</Card.Title>
                {/*  */}
                
                  <ProjectModal/>

                {/*  */}
                
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

export default React_info;
