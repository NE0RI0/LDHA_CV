import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import ProjectCard from "../../global/components/project_card/project_card";
import "./styles/python_info.css";

function Python_info() {
  const Projects = [
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/DroneTerminal.png?raw=true",
      title: "Drone Terminal",
      about: "",
      technologies: "Python, OpenV, Sockets",
      status: "",
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/database.png?raw=true",
      title: "Database Inspector",
      about: "",
      technologies: "",
      status: "",
    },
    {
      img:
        "https://scontent.fcjs4-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/173971200_1403117996716961_7214619098226838291_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFeHi_xCSNR-Tn0-u3wxnDGIUim2X8UbHUhSKbZfxRsdSZhGb5u21jyBB9s4DNMy5WwYu0JfzMKPxmB_hlUws3t&_nc_ohc=uTktVQdxSgYAX_Njvat&_nc_ht=scontent.fcjs4-1.fna&tp=30&oh=c63adf13be5460af08299797addcbda0&oe=609E6EDF",
      title: "Integrated Writing Environment",
      about: "",
      technologies: "",
      status: "",
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/frameficador.PNG?raw=true",
      title: "Frame Extractor",
      about: "",
      technologies: "",
      status: "",
    },
    {
      img: "",
      title: "Vigilance System",
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
  ];
  return (
    <div className="python-div">
      <div className="">
        <h1>welcomes</h1>
        <CardColumns>
          {Projects.map((project) => (
            <Card>
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
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

        {/* <ProjectCard></ProjectCard> */}
      </div>
    </div>
  );
}

export default Python_info;
