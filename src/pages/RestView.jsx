import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  
  const restaurant=useSelector((state)=>state.restaurantSlice.allrestaurant)
  console.log(restaurant); 
  const {id} = useParams()
  console.log(id);
 
  const selectedrestaurant=restaurant.find((Item)=>Item.id==id)
  console.log(selectedrestaurant);


  
  return (
    <div className='container'>
      <Row>
    <Col  sm={6} md={4}>
    <img width={"90%"} height={"500px"} className='p-4' src={selectedrestaurant.photograph} alt="" />
    
    
    </Col>

<Col className='p-4'>

<hr />

<h2 style={{textAlign:"center"}}>restaurant</h2>
<hr />
<ListGroup className='border border-dark'>
  <h2 className='mt-3'  style={{textAlign:"center"}} >Reastaurant Name</h2>
      <ListGroup.Item>Neighbourhood :{selectedrestaurant.neighborhood} </ListGroup.Item>
      <ListGroup.Item>Cuisine_type :{selectedrestaurant.cuisine_type} </ListGroup.Item>
      <ListGroup.Item>Address :{selectedrestaurant.address} </ListGroup.Item>
     
    </ListGroup>

    <div className='mt-3 text-center '>
      <button onClick={handleShow} type="button" class="btn btn-outline-success">Operating Hours</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>
      <ListGroup.Item>Monday :{selectedrestaurant.operating_hours.Monday} </ListGroup.Item>
      <ListGroup.Item>Tuesday :{selectedrestaurant.operating_hours.Tuesday} </ListGroup.Item>
      <ListGroup.Item>Wednesday :{selectedrestaurant.operating_hours.Wesnesday} </ListGroup.Item>
      <ListGroup.Item>Thursday :{selectedrestaurant.operating_hours.Thursday} </ListGroup.Item>
      <ListGroup.Item>Friday :{selectedrestaurant.operating_hours.Friday} </ListGroup.Item>
      <ListGroup.Item>Saturday :{selectedrestaurant.operating_hours.Saturday} </ListGroup.Item>
      <ListGroup.Item>Sunday :{selectedrestaurant.operating_hours.Sunday} </ListGroup.Item>

    </ListGroup></Modal.Body>
      </Modal>
      <RestReview reviews={selectedrestaurant.reviews}/>
</div>





</Col>
<Col md={1}></Col>

      </Row>






    </div>
  )
}

export default RestView