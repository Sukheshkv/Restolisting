import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/restaurantSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img height={'50px'} src="https://tse1.mm.bing.net/th?id=OIP.XxaIOUgYO4vO860hefE1lgAAAA&pid=Api&P=0&h=220" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link to={'/'} class="nav-link active" href="#" ><h2 className='fw-bold text-white'>MOON<span style={{color:'green'}}>BUCKS</span></h2>
            <span class="visually-hidden">(current)</span>
          </Link>
        </li>
       
      </ul>

      <input onChange={(e)=>dispatch(search(e.target.value))}  type='text' className='form-control w-25 bg-light text-dark' placeholder='Search by neighborhood' />
      <button className='btn btn-success ms-2' >SEARCH</button>
      
    </div>
  </div>
</nav></>
  )
}

export default Header