import React from 'react';
import { Button, Modal, Accordion, Card, CardColumns, CardGroup } from 'react-bootstrap';
import './styles/modalProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// title, description, libraries, extra,
function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

function MyVerticallyCenteredModal(props) {
  console.log(props.info.data.name)
  var paragraphs = props.info.data.about;
  // {range(props.info.data.about.length).map((number)=>(<p className='acordion-p'>{props.info.data.about[number]}</p>))}
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal-div'
      >
          <div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className='a-title'>{props.info.data.name}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion>
            <Card className='bg-dark'>
                <Card.Header>
                <Accordion.Toggle as={Button} className='btn-block mr-1 mt-1 btn-lg' variant="text" eventKey="0">
                    <div className='toogler'>
                    <h5 className='a-subtitle' >About <span>Project </span> </h5>
                    <FontAwesomeIcon className='a-subtitle' icon={faChevronDown} />
                  </div>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body> 
                  {range(paragraphs.length).map((number)=>(<p className='acordion-p'>{paragraphs[number]}</p>))}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <hr className='g-hr'/>
            <Card className='bg-dark'>
                <Card.Header>
                <Accordion.Toggle as={Button} className='btn-block mr-1 mt-1 btn-lg' variant="text" eventKey="1">
                  <div className='toogler'>
                    <h5 className='a-subtitle' >Technical <span>Info </span></h5>
                    <FontAwesomeIcon className='a-subtitle' icon={faChevronDown} />
                  </div>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body> 
                {range(props.info.data.status.length).map((number)=>(
                  <p className='acordion-p'>{props.info.data.status[number]}</p>
                ))}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <hr className='g-hr'/>
            <Card className='bg-dark'>
                <Card.Header>
                <Accordion.Toggle as={Button} className='btn-block mr-1 mt-1 btn-lg' variant="text" eventKey="2">
                    <div className='toogler'>
                    <h5 className='a-subtitle' >Technologies <span>Used </span></h5>
                    <FontAwesomeIcon className='a-subtitle' icon={faChevronDown} />
                  </div>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <CardColumns>
                    {range(props.info.data.technologies.length).map((number)=>(<Card className='acordion-p-white bg-dark text-center'>{props.info.data.technologies[number]}</Card>))}
                  </CardColumns>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            {/* <hr className='g-hr'/>
            <Card className='bg-dark'>
                <Card.Header>
                <Accordion.Toggle as={Button} className='btn-block mr-1 mt-1 btn-lg' variant="text" eventKey="3">
                  <div className='toogler'>
                    <h5 className='a-subtitle' >Extra <span>Info </span></h5>
                    <FontAwesomeIcon className='a-subtitle' icon={faChevronDown} />
                  </div>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body> 
                      {range(props.info.data.status.length).map((number)=>(<p className='acordion-p'>{props.info.data.status[number]}</p>))}

                </Card.Body>
                </Accordion.Collapse>
            </Card> */}
            <hr className='g-hr'/>
            <Card className='bg-dark'>
                <Card.Header>
                <Accordion.Toggle as={Button} className='btn-block mr-1 mt-1 btn-lg' variant="text" eventKey="4">
                  <div className='toogler'>
                    <h5 className='a-subtitle' >Related <span>Links </span></h5>
                    <FontAwesomeIcon className='a-subtitle' icon={faChevronDown} />
                  </div>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                <Card.Body>
                  {range(props.info.data.links.length).map((number)=>(<p className='acordion-p'><a href={props.info.data.links[number][1]} >{props.info.data.links[number][0]}</a></p>))}
                  {/* <p className='acordion-p'> {props.info.data.links} </p> */}
                  {/* {console.log(props.info.data.links[0])} */}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </div>
      </Modal>
    );
  }

  function ProjectModal(data) {
    const [modalShow, setModalShow] = React.useState(false);
    const dat = data;
    // console.log(dat)
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          About Project
        </Button>
        <MyVerticallyCenteredModal
          info={data}
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
      </>
    );
  }

export default ProjectModal;