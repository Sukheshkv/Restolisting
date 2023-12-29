import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'

function RestReview({reviews}) {
  const [open,setOpen] = useState(false);
  return (
    <>
    <button onClick={()=>setOpen(!open)}  type="button" class="btn btn-outline-info ms-3">Click here to View the Reviews</button>
    <Collapse in ={open}>
      <div>
        {
          reviews?.map((item)=>(<>
          <hr/>
        <h5>name:{item.name} - date:{item.date}</h5>
        <p>rating:{item.rating}</p>
        <p>description:{item.comments}</p>
          </>))
          
        }
      </div>
    </Collapse>

</>
  )
}

export default RestReview