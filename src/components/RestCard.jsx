import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restuarant}) {
  return (
    <>
    
    <Link style={{textDecoration:"none"}} to={`/restaurant_view/${restuarant.id}`}>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={restuarant.photograph} />
      <Card.Body>
        <Card.Title className='text-center'>{restuarant.name}</Card.Title>
        <hr/>
        <Card.Text className='d-flex justify-content-between'>
          <p>{restuarant.neighborhood}</p>
          <p>{restuarant.cuisine_type}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    
    
    </Link>
    </>
  )
}

export default RestCard