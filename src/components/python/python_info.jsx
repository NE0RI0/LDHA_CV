import React from "react";
import { Card, CardColumns, Accordion, Button } from "react-bootstrap";
import ProjectModal from "../../global/components/projectModal/modalProject";
import "./styles/python_info.css";
import { Col, Row } from 'react-bootstrap';

function Python_info() {
  const Projects = [
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/DroneTerminal.png?raw=true",
      title: "Drone Terminal",
      data:{
        name:'Drone Terminal',
        about: [
          "The project consists of an application that communicates with a drone on BRP's production lines. This consists of mutiple windows, login, control terminal, settings and a tool to create automatic missions.",
          "The application controls the drone and receives video in real time whiele running through the production lines, you can send commands to take off, land, speed, direction of movement, 3-axis gimbal angles, take photo, record video, pause recording, stop recording and return to the charging station.",        
          "The first thing the user encounters is a login window in front of the control terminal, in case the user closes the login window, the terminal buttons will remain disabled. Once the session is started, the buttons are enabled in the terminal. The users can be registered either in a database (mongoDB or SQL) or in an local encrypted json in case the user prefers it.", 
          "In the settings menu there are tools to create users, register drones, select the format in which you want to save the video (.AVI, MPEG, MP4), its resolution, you can select the destination folder for the multimedia files (photos and videos) and user information can be viewed and modified. The configuration is saved in a json file.",
          "To start the connection with a drone, the application has a drop-down menu, which obtains a list of registered drones from a json file wish you can edit at settings, once you pick the desired drone, you can press the start connection button, which will start the process to establish communication with the selected drone, in case this is successful, the drone video will begin to show on the screen, or in case of failure, it shows a warning label indicating that communication with this drone cannot be established.",
          "Another tool is the automatic mission editor, which consists of a window, which contains buttons with all the actions that the drone can perform, which the user can press to add these to a list that can be viewed on the right side. Apart from the window, it has the ability to delete or select previously created missions and add steps to them or create a new mission instead of starting from scratch. The missions created are saved in a json file.",
        ],
        technologies: ["Python", 'PyQt5', 'OpenV', 'Sockets', 'Ardupilot', 'Cython', 'Threads'],
        status: [
          "The ui was created using PyQt5, in a stand alone file as a class, which are imported into the logic files of each program.",
          "Due to Python being a relatively slow language compared to C++, we decided to use Cython for the socket communication, one for the commands and the other for the transmission of the video, which run in different threads.",
          "The video is processed and saved with the OpenCv library, adjusting the resolution ito the one indicated by the user in the settings menu.",
          "To register a new dron the user will need to go to the settings window, and press the button \"Register Dron\" and write a name and the ip addres of the dron, also, the user can add optional comments if he/she thinks it's required ",
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/database.png?raw=true",
      title: "Database Inspector",
      data:{
        name:'Database Inspector',
        about: [
          "The project was created for the company Tutorel to give access to a database to people without great computer knowledge, allowing them to filter and obtain the information they require without the need for extensive training, without the danger of making accidental or malicious modifications with no more than three actions on their part. This was also used by investors to get an idea of ​​the growth of the platform and helped improve the user registration process.",
          "The project consists of two applications, of which the end user only has access to one.",
          "The firstone consists of a menu that requires authentication. This aplication allows to enter the credentials for the database to which you want to access.",
          "The second is an application that displays a widget for each column in the database to which the user has access. These widgets consist of a label that indicates which column it is, a text field for filtering that includes what is typed and a radial button to say whether or not they want the column to appear in the search. At the bottom of these widgets there is a table where the search results appear and on the right side two buttons, one to perform the search and display it in the table and the other to export the table to a “.xslx” file (EXCEL).",
        ],
        technologies: ['Python', 'PyQt5', 'MongoDB', 'PyMongo'],
        status: [
          'This application connects to MongDB databases, using the pymongo library.',
          'It exported the data to “.xslx” using the pandas library which would have allowed to export the data to many other formats, but that was not needed at the moment.',
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://scontent.fcjs4-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/173971200_1403117996716961_7214619098226838291_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFeHi_xCSNR-Tn0-u3wxnDGIUim2X8UbHUhSKbZfxRsdSZhGb5u21jyBB9s4DNMy5WwYu0JfzMKPxmB_hlUws3t&_nc_ohc=uTktVQdxSgYAX_Njvat&_nc_ht=scontent.fcjs4-1.fna&tp=30&oh=c63adf13be5460af08299797addcbda0&oe=609E6EDF",
      title: "Integrated Writing Environment",
      data:{
        name:'Integrated Writing Environment',
        about: [
          "This is a personal project, which consists of an integrated writing environment for writers. The idea is to create an environment that the user can customize to their liking, building their own writtin environment, being able position as many tools as they need, or eliminate as many distractions as possible, while trying not to cripple it's functionality.",
          "The basic work environment consists of 5 areas, 4 tool areas, which surround the main central area which is the writing area, the tool areas remain hidden unless the user places toolbars or individual tools on them. Multiple bars or tools can be placed on each tool area.",
          "The tools that are currently implemented are the basic toolbar to format the text, the system toolbar (print, cut, insert grids, insert pictures) and a toolbar with tools such as search and word substitution, dictionary, dictionary of synonyms and antonyms, calendar of the current project story , and book of biographies of the writing.",
        ],
        technologies: ['Python', 'PyQt5', 'NLTK (Natural Language Toolkit)'],
        status: [
          "For the dictionary and search engine for synonyms and antonyms, the NLTK (Natural Language Toolkit) library was used with the intention of taking advantage of its tools like processing statistical natural language processing (NLP), text processing, libraries for tokenization, parsing , classification, stemming, tagging and semantic reasoning in the future",
          "The files can be saved in two different formats, depending on the configuration the writer preffers. In case of wanting to give format to the text, the files are saved with the extension “.stell”, or in case of only wanting the raw text, this can be saved both with the extension “.stell” or in the “.txt” format.",
          "Currentlywonrking to fix some bugs while importing images and adding the capability to working with projects instead of files",
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/vigilance.png?raw=true",
      title: "Vigilance System",
      data:{
        name:'Vigilance System',
        about: [
          "This application consisted of a simple surveillance system for a workshop which only records when it detects movement at times when no one is supposed to be working.",
          "The system consists of a RaspberryPi4, a router and three IP cameras, which are observing the access points to the workshop, and the main area.",
        ],
        technologies: ['Python', 'PyQt5', 'Pillow', 'OpenCV', 'MongoDB', 'PyMongo'],
        status: [
          "The system runs on the RaspberryPi4 in a linux environment, so it can be accessed through ssh to make adjustments that may be necessary.",
          "The program uses the OpenCv library to obtain images and process them, making the cameras work like event .",
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/QrScannerDrone.png?raw=true",
      title: "Qr Scanner with DJI drone",
      data:{
        name:'Qr Scanner with DJI drone',
        about: [
          "This was a project to test the concept of scanning products in a warehouse using drones.",
          "The project began using the Tello Edu drone from the DJI company, establishing a direct connection with it to carry out control tests, and a graphical interface was developed to facilitate its handling.",
          "Then we proceeded to automate routes. The drone used only it's lidar, to do a stability test in one of the areas where it would be implemented.",
          "Subsequently, we enabled the swarm functionality, to connect the drone to a local network, which allowed to considerably expand the area in which the drone can move.",
          "Once it was verified that control could be maintained in the entire desired area, work began with it's mats to make a comparison between a drone that is guided with sensors to one that uses a vision system.",
          "Unfortunately due to unexpected setbacks caused by COVID-19, the project had to be canceled, obtaining as a final product a drone capable of moving through a warehouse and scanning the Qr codes of the stored products, still debating whether the best option was allow the drone to get it's positioning through sensors, an internal vision system, or a vision system external to the drone.",
        ],
        technologies: ['Python', 'DJITelloPy', 'OpenCV', 'Json', 'Numpy', 'Socket', 'Imutils', 'Pyzbar'],
        status: [
          "For the first iteration of the project, we used the library provided by DJI to control the drone, however, given some limitations to obtain information from some sensors, an internal library was created using the sdk DJI provides, which slightly improved the speed of obtaining frames for the video. and create our own format for the data obtained from the drone sensors.",
          "The design of the first custom drone for this task was left as a concept in solid works.",
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/AccessControl.PNG?raw=true",
      title: "Access control system",
      data:{
        name:'Access control system',
        about: [
          "The project started as a face recognition program for another project at the company Dunas Tech, but due to companies looking for new ways to control the acces to the buildings, the company decided to combine diferent technologies from multiple products to create an access control system.",
          "This project can be divided in two parts, hardware and software.",
          "The hardware consists on an Arduino, a relay, an elctronic door lock, two cameras, and a main computer, which could be either a computer the company has already deployed or a RaspberryPi if the company wants a computer dedicated exclusivery to the system.",
          "The software consists on a database that stores pictures and names (MongoDB) and a program that can be installed on Linux or windows systems and recives inputs from both cameras running in diferent threads, one of which looks for faces, and one for a credential that includes a photography of the worker and a QR code, and once it detects all three it compares both faces with the name on the QR code, once all three parameters coincide, the computer sends an instruction to the arduino to open the door.",
        ],
        technologies: ['Python', 'C++', 'PyQt5', 'Sockets', 'Arduino', 'RaspberryPi', 'Linux', 'OpenCV', 'MySQL'],
        status: [
          "",
          "",
        ],
        links:[
          ['Oficial Python page', 'https://www.python.org/'],
          ['Oficial OpenCv page','https://opencv.org/'],
        ],
      },
    },
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/frameficador.PNG?raw=true",
      title: "Frame Extractor",
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
        ],
      },
    },
    // {
    //   img: "",
    //   title: "",
    //   data:{
    //    name: "",
    //    about: ["",],
    //    technologies: ["",],
    //    status: [""],}
    // },
  ];
  return (
    <div className="python-div">
      <div className="projects-container">
        <h1 className='title' >Python</h1>
        <hr className='g-hr'/>
        <p className='intro-p'>As a python developer i've been responsable of writing and testing code, integrating applications with third-party web services, improve responsiveness and overall performance, assess and prioritize feature requests and coordinate with internal teams to understand user requirements and provide technical solutions</p>
        <hr className='g-hr'/>
        <div>
          {Projects.map((project) => (
            <div className='project-card'>
                <Row>
                  <Col md={12} lg={6}>
                    <center>
                      <img className='l-img' src={project.img}></img>
                    </center>
                  </Col>
                  <Col md={12} lg = {6}>
                    <center>
                      <h1 className='h-h2' >{project.title}</h1>
                      <p>{project.data.about}</p>
                      <ProjectModal data={project.data}/>  
                    </center>
                  </Col> 
                </Row>
              <hr className='g-hr'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Python_info;
