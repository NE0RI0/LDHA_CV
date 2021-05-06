import React from "react";
import { Card, CardColumns, Accordion} from "react-bootstrap";
import ProjectModal from "../../global/components/projectModal/modalProject";

import "./styles/c_cpp.css";

function CPP_info() {
  const Projects = [
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/UltrasonicControlLateral.jpeg?raw=true",
      title: "Ultrasonic Control",
      about: "",
      technologies: "Python, OpenV, Sockets",
      status: "",
    },
    {
      img: "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/measures.jpeg?raw=true",
      title: "Vision system to get measures",
      about: "",
      technologies: "",
      status: "",
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/droneTesting.jpeg?raw=true",
      title: "Custom Railed Drone",
      about: "",
      technologies: "",
      status: "",
    },
    {
      img: "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/CustomDroneXirris.jpeg?raw=true",
      title: "Custom Drone",
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
      <h1 className='title' >Hardware</h1>
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
                {/* <div className="text-right blockquote-footer">
                  <small className="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

export default CPP_info;
