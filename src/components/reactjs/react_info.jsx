import React from "react";
import { Card, CardColumns, Accordion } from "react-bootstrap";

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
    {
      img: "",
      title: "",
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
  ];
  return (
    <div className="python-div">
      <div className="projects-container">
        <h1>welcomes</h1>
        <CardColumns>
          {Projects.map((project) => (
            <Card className="bg-dark text-white">
              <Card.Img variant="top" src={project.img} />
              <Card.Body className="project-card">
                <Card.Title>{project.title}</Card.Title>
                {/*  */}
                <Accordion defaultActiveKey="1">
                    <Card className='bg-dark' >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                {/*  */}
                <div className="text-right blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

export default React_info;
