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
      data:{
        name:'Frame Extractor',
        about: [
          "It was a small proyect created to help train a neural network, taking every frame from a video, adjusting the resolution, and saving them with a given name and format. ",
        ],
        technologies: ['Python', 'PyQt5', 'OpenCV'],
        status: [],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],},
    },
    {
      img:
        "https://www.nexmo.com/wp-content/uploads/2016/06/group-chat-sms-terminal.png",
      title: "Drone stadistics API",
      data:{
        name:'Frame Extractor',
        about: [
          "It was a small proyect created to help train a neural network, taking every frame from a video, adjusting the resolution, and saving them with a given name and format. ",
        ],
        technologies: ['Python', 'PyQt5', 'OpenCV'],
        status: [],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],}
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
        <h1 className='title' >Python</h1>
        <div className='python-section' >
          <hr className='g-hr'/>
          <div className='python-welcome'>
            <p>As a python developer i've been responsable of writing and testing code, integrating applications with third-party web services, improve responsiveness and overall performance, assess and prioritize feature requests and coordinate with internal teams to understand user requirements and provide technical solutions</p>
          </div>
          <hr className='g-hr'/>
        </div>
        <div>
          {Projects.map((project) => (
            <div>
            <div className='poroject-Card' >
              <div className='l-div' >
                <center>
                  <img className='l-img' src={project.img}></img>
                </center>
              </div>
              <div className='r-div' >
                <h1 className='h-h2' >{project.title}</h1>
                <p>this project is a something that works for something else at someewere</p>
                <ProjectModal data={project.data}/>  
              </div>              
            </div>
            <hr className='g-hr'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React_info;
