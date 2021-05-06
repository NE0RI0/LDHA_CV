import React from "react";
import { Card, CardColumns, Accordion, Button } from "react-bootstrap";
import ProjectModal from "../../global/components/projectModal/modalProject";
import "./styles/python_info.css";

function Python_info() {
  const Projects = [
    {
      img:
        "https://github.com/NE0RI0/LDHA_CV/blob/main/src/global/resources/img/projects/DroneTerminal.png?raw=true",
      title: "Drone Terminal",
      data:{
        name:'Drone Terminal',
        about: [
          "This project consists of an application that communicates with a drone on BRP's production lines. This consists of mutiple windows, login, control terminal, settings and a tool to create automatic missions.",
          "The application controls the drone and receives video in real time whiele running through the production lines, you can send commands to take off, land, control it's speed, direction of movement, 3-axis bed angles, take photo, record video, put on hold recording, stop recording and return to the charging station.",        
          "When starting the application, the first thing the user encounters is a login window in front of the control terminal, in case of closing the login window, the terminal does not respond. Once the session is started, the buttons are enabled in the terminal, the users can be registered either in a database (mongoDB or SQL) or in an encrypted json in case the user prefers it.", 
          "To start the connection with a drone, the application has a drop-down menu, which obtains a list of registered drones from a json file, when selecting the desired drone, you can press the start connection button, which will start the process to establish communication with the selected drone, in case this is successful, the drone video will begin to show on the screen, or in case of failure, it shows an alarm label indicating that communication with this drone cannot be established.",
          "In the options menu there are tools to create users, register drones, select the format in which you want to save the video (.AVI, MPEG, MP4), its resolution, you can select the direction in which you want to multimedia files (photos and videos) are saved and user information can be viewed and modified. The configuration is saved in a json file.",
          "Another tool is the automatic mission editor, which consists of a window, which contains buttons with all the actions that the drone can perform, which the user can press to add these to a list that can be viewed on the right side. Apart from the window, it has the ability to delete or select previously created missions and add steps to them or create a new mission from another. The missions created are saved in a json file.",
        ],
        technologies: ["Python", 'PyQt5', 'OpenV', 'Sockets', 'Ardupilot', 'Cython', 'Threads'],
        status: [
          "The graphical interface was created using PyQt5, saving these as classes, which are imported into the logic files of each program.",
          "Python being a relatively slow language compared to C ++, it was decided to use Cython in the communication by sockets, one for the commands and the other for the transmission of the video, which run in different threads.",
          "The video is processed and saved with the OpenCv library, making changes to the resolution in case the user indicates something different from that of the camera in the settings window.",
          "In the drone registration window, there are three fields, of which only two are mandatory, the name of the drone and its IP, the comments field is to be able to make maintenance annotations, or other information that a user detects is necessary other users take into account.",
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
          "This project was created for the Tutorel company to give access to a database to people without great computer knowledge, allowing them to obtain the information they require without the need for extensive training, without the danger of making accidental or malicious modifications and making field filtering with no more than two actions on your part. This was also used by investors to get an idea of ​​the growth of the platform and helped improve the user registration process.",
          "The project consists of two applications, of which the end user only has access to one.",
          "The first consists of a menu that requires authentication and is only to enter the credentials and the database to which you want to access.",
          "The second is an application that displays a widget for each column in the database to which the user has access. These widgets consist of a label that indicates which column it is, a text field for filtering that includes what is typed and a radial button to say whether or not they want the column to appear in the search. At the bottom of these widgets there is a table where the search results appear and on the right side two buttons, one to perform the search and it appears in the table and the other to export the table to a “.xslx” file ( EXCEL).",
        ],
        technologies: ['Python', 'PyQt5', 'MongoDB', 'PyMongo'],
        status: [
          'This application connects to MongDB databases, using the pymongo library.',
          'It exported the data to “.xslx” using pandas which would have allowed to exported to many other formats, but were not needed at the moment.',
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
          "This is a personal project, which consists of a writing environment focused on writers. The idea is to create an environment that the user can configure to their liking, allowing the toolbars to be accommodated in the most comfortable position or to eliminate them completely.",
          "Another of the main objectives of this writing environment is to give the user the possibility to eliminate as many distractions as possible, trying not to damage its functionality.",
          "The basic work environment consists of 5 areas, 4 tool areas, which surround the central area which is the writing area, the tool areas remain hidden unless the user places toolbars or individual tools on them, multiple bars or tools can be placed on each of them.",
          "The tools that are currently implemented are the basic toolbar to format the text, the system toolbar (print, cut, insert grids, insert images) and a toolbar with tools such as search and word substitution, dictionary, dictionary of synonyms and antonyms, calendar of the current writing, and book of biographies of the writing.",
        ],
        technologies: ['Python', 'PyQt5', 'NLTK (Natural Language Toolkit)'],
        status: [
          "For the dictionary and search engine for synonyms and antonyms, the NLTK (Natural Language Toolkit) library was used with the intention that in the future take advantage of its tools for the processing of statistical natural language processing (NLP), text processing libraries for tokenization, parsing , classification, stemming, tagging and semantic reasoning, etc.",
          "The files can be saved in two different formats, depending on the configuration of the writer. In case of wanting to format the text, the files are saved with the extension “.stell”, or in case of only wanting the text, this can be recorded both with the extension “.stell” and in the “.txt” format.",
          "The next tasks will be to correct bugs when importing images and add the function of working on projects instead of files",
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
          "This application consisted of a simple surveillance system for a workshop which only records when it detects movement at times when there were no active people.",
          "The system consists of a RaspberryPi4, a router and three IP cameras, which are observing the access points to the workshop.",
        ],
        technologies: ['Python', 'PyQt5', 'Pillow', 'OpenCV', 'MongoDB', 'PyMongo'],
        status: [
          "The system runs on the RaspberryPi4 in a linux environment, so it can be accessed through ssh to make adjustments or other things that may be necessary.",
          "The program uses the OpenCv library to obtain images and process them, since although the system is always running, it only saves the video when it detects movement.",
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
          "Then we proceeded to automate routes that the drone would continue to use only its lidar, to do a stability test in one of the areas where it would be implemented.",
          "Subsequently, its swarm mode configuration was enabled, to connect the drone to a local network, which allowed to considerably expand the area in which the drone can move.",
          "Once it was verified that control could be maintained in the entire desired area, work began with the mats of this to make a comparison between a drone that is guided by means of sensors to one that uses a vision system.",
          "Unfortunately due to unexpected setbacks caused by COVID-19, the project had to be canceled, obtaining as a final product a drone capable of moving through a warehouse and scanning the Qr codes of the stored products, still debating whether the best option is a storage system. positioning through sensors, an internal vision system, or a vision system external to the drone.",
        ],
        technologies: ['Python', 'DJITelloPy', 'OpenCV', 'Json', 'Numpy', 'Socket', 'Imutils', 'Pyzbar'],
        status: [
          "When starting this project, it was started using the library provided by DJI to control the drone, however, given some limitations to obtain information from some sensors, an internal library was created, which slightly improved the speed of obtaining frames for the video. and create our own format for the data obtained from the drone sensors.",
          "The design of the first custom drone for this task just became a concept in solid works.",
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
        about: [],
        technologies: ['Python', 'C++', 'PyQt5', 'Sockets', 'Arduino', 'RaspberryPi', 'Linux', 'OpenCV', 'MySQL'],
        status: [],
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
        about: [],
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
        <div className='python-section' >
          <hr className='g-hr'/>
          <div className='python-welcome'>
            <p>As a python developer i've been responsable of writing and testing code, integrating applications with third-party web services, improve responsiveness and overall performance, assess and prioritize feature requests and coordinate with internal teams to understand user requirements and provide technical solutions</p>
          </div>
          <hr className='g-hr'/>
        </div>
        <CardColumns>
          {Projects.map((project) => (
            <Card className="bg-dark text-white text-center">
              <Card.Img variant="top" src={project.img} />
              <Card.Body className="project-card">
                <Card.Title>{project.title}</Card.Title>
                  <ProjectModal data={project.data}/>               
              </Card.Body>
              
            </Card>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

export default Python_info;
